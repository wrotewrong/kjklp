// const puppeteer = require('puppeteer');
const { employees } = require('./db');
const fetch = require('node-fetch');
const getShoulderMarkImg = require('./utils/shoulderMark.js');
const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const units = [
  // {
  //   unitName: 'RDLP w Szczecinie',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.szczecin.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Szczecinku',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.szczecinek.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Łodzi',
  //   structure: 'RDLP',
  //   unitUrl: 'https://lodz.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  {
    unitName: 'RDLP w Białymstoku',
    structure: 'RDLP',
    unitUrl: 'https://www.bialystok.lasy.gov.pl/regionalna-dyrekcja-lp',
  },
  {
    unitName: 'RDLP w Gdańsku',
    structure: 'RDLP',
    unitUrl: 'https://www.gdansk.lasy.gov.pl/regionalna-dyrekcja-lp',
  },
  {
    unitName: 'RDLP w Olsztynie',
    structure: 'RDLP',
    unitUrl: 'https://www.olsztyn.lasy.gov.pl/kontakty',
  },
  // {
  //   unitName: 'RDLP w Zielonej Górze',
  //   structure: 'RDLP',
  //   unitUrl:
  //     'https://www.zielonagora.lasy.gov.pl/kontakt-regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Poznaniu',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.poznan.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Pile',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.pila.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Toruniu',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.torun.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Warszawie',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.warszawa.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Radomiu',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.radom.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Lublinie',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.lublin.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Krośnie',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.krosno.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Katowicach',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.katowice.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Krakowie',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.krakow.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP we Wrocławiu',
  //   structure: 'RDLP',
  //   unitUrl: 'https://www.wroclaw.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },

  // {
  //   unitName: 'Nadleśnictwo Gostynin',
  //   structure: 'DISTRICT',
  //   unitUrl: 'https://gostynin.lodz.lasy.gov.pl/nadlesnictwo',
  // },
  // {
  //   unitName: 'Nadleśnictwo Konin',
  //   structure: 'DISTRICT',
  //   unitUrl: 'https://konin.poznan.lasy.gov.pl/nadlesnictwo',
  // },
];

async function scrapUnitData(openDelay, unit) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      let closeDelay = Math.random() * 10000 + 5000;
      console.log({ closeDelay });
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        defaultViewport: false,
        ignoreHTTPSErrors: true,
        ignoreDefaultArgs: ['--disable-extensions'],
      });
      const page = await browser.newPage();

      await page.goto(unit.unitUrl);

      const mainPositions = await page.$$('.positions > .position');

      for (let element of mainPositions) {
        let position = null;
        let fullName = null;

        position = await page.evaluate(
          (el) => el.querySelector('.name > span').textContent,
          element
        );

        fullName = await page.evaluate(
          (el) => el.querySelector('.full-name > span').textContent,
          element
        );

        let employee = {
          fullName,
          unitName: unit.unitName,
          position,
          shoulderMarkImg: getShoulderMarkImg(
            position,
            fullName,
            unit.structure
          ),
        };

        // console.log(employee);

        try {
          const response = await fetch(`http://localhost:8000/employee`, {
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

      const secondaryPositions = await page.$$('.departments > .department');

      for (let element of secondaryPositions) {
        let department = null;
        try {
          department = await page.evaluate(
            (el) => el.querySelector('h2 > a').textContent,
            element
          );

          const secondaryPositionsDepartments = await element.$$(
            '.department-data > .department-positions > .department-position-wrapper'
          );

          for (let innerElement of secondaryPositionsDepartments) {
            let position = null;
            let fullName = null;

            position = await page.evaluate(
              (el) => el.querySelector('.name > span').textContent,
              innerElement
            );

            fullName = await page.evaluate(
              (el) => el.querySelector('.full-name > span').textContent,
              innerElement
            );

            let employee = {
              fullName,
              unitName: unit.unitName,
              position,
              department,
              shoulderMarkImg: getShoulderMarkImg(
                position,
                fullName,
                unit.structure
              ),
            };

            // console.log(employee);

            try {
              const response = await fetch(`http://localhost:8000/employee`, {
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
        } catch (err) {}
      }

      await page.waitForTimeout(closeDelay);
      await browser.close();

      console.log(`All done, resolving`);
      resolve();
    }, openDelay);
  });
}

async function scrapManyUnits() {
  const start = Date.now();

  for (let unit of units) {
    const openDelay = Math.random() * 100000 + 5000;
    // const openDelay = Math.random() * 1;
    console.log('unit', unit.unitName);
    console.log({ openDelay });

    await scrapUnitData(openDelay, unit);
  }
  const finish = Date.now();
  console.log(`done in ${Math.round((finish - start) / 60000)} minutes`);
}

scrapManyUnits().then(() => console.log('Scrapping finished'));
