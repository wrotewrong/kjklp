const fetch = require('node-fetch');
const getShoulderMarkImg = require('./utils/shoulderMark.js');
const puppeteer = require('puppeteer-extra');
const { units } = require('./db');
require('dotenv').config();

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const secretDbKey = process.env.SECRET_DB_KEY_ARGUMENT;

async function scrapUnitData(openDelay, unit) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const closeDelay = Math.random() * 10000 + 5000;
      console.log({ closeDelay });
      const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        defaultViewport: false,
        ignoreHTTPSErrors: true,
        ignoreDefaultArgs: ['--disable-extensions'],
      });
      const page = await browser.newPage();

      try {
        await page.goto(unit.unitUrl);
      } catch (error) {
        console.error(`Error loading ${unit.unitUrl}: ${error.message}`);
      }

      // declaration of function that adds scrapped employees to the database
      async function postEmployee(employee) {
        try {
          const response = await fetch(`${process.env.SITE_URL}/employee`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
          });

          if (response.ok) {
            console.log('Data saved successfully');
          } else {
            console.error('Error saving data:', response.statusText);
          }
        } catch (error) {
          console.error('Error saving data:', error);
        }
      }

      // declaration of function that scraps the info about head of the company
      async function getMainPositions(structure) {
        let websiteSelector = '';
        let positionSelector = '';
        let fullNameSelector = '';

        if (structure === 'RDLP' || structure === 'DISTRICT') {
          websiteSelector = '.positions > .position';
          positionSelector = '.name > span';
          fullNameSelector = '.full-name > span';
        } else if (structure === 'DGLP') {
          websiteSelector = '#content-core > .contactPeople';
          positionSelector = '.titles > h4';
          fullNameSelector = '.titles > p';
        }

        const mainPositions = await page.$$(websiteSelector);

        for (let element of mainPositions) {
          let position = null;
          let fullName = null;

          position = await page.evaluate(
            (selector, el) => el.querySelector(selector)?.textContent,
            positionSelector,
            element
          );

          fullName = await page.evaluate(
            (selector, el) => el.querySelector(selector)?.textContent,
            fullNameSelector,
            element
          );

          const { shoulderMark, rank } = getShoulderMarkImg(
            position,
            fullName,
            unit.structure
          );

          let employee = {
            fullName,
            unitName: unit.unitName,
            position,
            shoulderMarkImg: shoulderMark,
            rank,
            area: unit.area,
            secretDbKey,
          };

          console.log(employee.fullName, employee.unitName, employee.position);

          await postEmployee(employee);
        }
      }

      await getMainPositions(unit.structure);

      // code that scraps data about the rest of the employees of DGLP
      // DGLP site has unique structure - diffrent selectors and layout than regional directorate and district pages
      if (unit.structure === 'DGLP') {
        const generalDirectorateSecondaryPositions = await page.$$(
          '#content-core > .contactAccordion > div > .contactAccordion__content > p'
        );

        for (let i = 0; i < generalDirectorateSecondaryPositions.length; i++) {
          const departmentElement = generalDirectorateSecondaryPositions[i];
          const nameElement = generalDirectorateSecondaryPositions[i + 1];
          const positionElement = generalDirectorateSecondaryPositions[i + 2];

          const department = await page.evaluate(
            (el) => el.querySelector('strong')?.textContent.trim(),
            departmentElement
          );

          if (department && department != '') {
            const fullName = await page.evaluate(
              (el) => el.textContent.trim(),
              nameElement
            );
            let position = await page.evaluate(
              (el) => el.textContent.trim(),
              positionElement
            );
            position.startsWith('tel') ? (position = department) : position;

            const { shoulderMark, rank } = getShoulderMarkImg(
              position,
              fullName,
              unit.structure
            );

            let employee = {
              fullName,
              unitName: unit.unitName,
              position,
              department,
              shoulderMarkImg: shoulderMark,
              rank,
              area: unit.area,
              secretDbKey,
            };

            console.log(
              employee.fullName,
              employee.unitName,
              employee.position
            );

            await postEmployee(employee);
          }
        }
      }

      // code that scraps rest of the RDLPs employees - add (|| unit.structure === 'DISTRICT') to 'if' conditions to also scrap data from districts
      if (unit.structure === 'RDLP') {
        const secondaryPositions = await page.$$('.departments > .department');

        for (let element of secondaryPositions) {
          let department = null;

          department = await page.evaluate(
            (el) => el.querySelector('h2 > a')?.textContent,
            element
          );

          const secondaryPositionsDepartments = await element.$$(
            '.department-data > .department-positions > .department-position-wrapper'
          );

          for (let innerElement of secondaryPositionsDepartments) {
            let position = null;
            let fullName = null;

            position = await page.evaluate(
              (el) => el.querySelector('.name > span')?.textContent,
              innerElement
            );

            fullName = await page.evaluate(
              (el) => el.querySelector('.full-name > span')?.textContent,
              innerElement
            );

            const { shoulderMark, rank } = getShoulderMarkImg(
              position,
              fullName,
              unit.structure
            );

            let employee = {
              fullName,
              unitName: unit.unitName,
              position,
              department,
              shoulderMarkImg: shoulderMark,
              rank,
              area: unit.area,
              secretDbKey,
            };

            console.log(
              employee.fullName,
              employee.unitName,
              employee.position
            );

            await postEmployee(employee);
          }
        }
      }

      await page.waitForTimeout(closeDelay);
      await browser.close();

      console.log(`All done, resolving`);
      resolve();
    }, openDelay);
  });
}

//declaration of function that randomizes the order in which units are scrapped - to avoid detection
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const currentElment = array[i];
    array[i] = array[newIndex];
    array[newIndex] = currentElment;
  }
  return array;
};

const shuffledUnits = shuffleArray(units);

async function scrapManyUnits() {
  const start = Date.now();

  for (let unit of shuffledUnits) {
    const openDelay = Math.random() * 100000 + 10000;
    // const openDelay = Math.random() * 10000 + 1000;
    console.log('unit', unit.unitName);
    console.log({ openDelay });

    await scrapUnitData(openDelay, unit);
  }
  const finish = Date.now();
  console.log(`done in ${Math.round((finish - start) / 60000)} minutes`);
}

scrapManyUnits().then(() => console.log('Scrapping finished'));
