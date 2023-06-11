const fetch = require('node-fetch');
const getShoulderMarkImg = require('./utils/shoulderMark.js');
const puppeteer = require('puppeteer-extra');
const { units } = require('./db');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

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

      // code for DGLP - this site has unique structure - diffrent selectors and layout than regional directorate and district pages
      if (unit.structure === 'DGLP') {
        //code that scraps data about the head of the unit
        const generalDirectorateMainPositions = await page.$$(
          '#content-core > .contactPeople'
        );

        for (let element of generalDirectorateMainPositions) {
          let position = null;
          let fullName = null;

          position = await page.evaluate(
            (el) => el.querySelector('.titles > h4')?.textContent,
            element
          );

          fullName = await page.evaluate(
            (el) => el.querySelector('.titles > p')?.textContent,
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
          };

          console.log(employee);

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

        //code that scraps data about the rest of the employees
        const generalDirectorateSecondaryPositions = await page.$$(
          '#content-core > .contactAccordion > div > .contactAccordion__content'
        );

        for (let element of generalDirectorateSecondaryPositions) {
          // let department = null;
          try {
            department = await page.evaluate(
              (el) => el.querySelector('p > strong')?.textContent,
              element
            );
            console.log(department);

            // const generalDirectorateSecondaryPositionsDepartments =
            //   await element.$$('p > strong');

            // for (let department of generalDirectorateSecondaryPositionsDepartments) {
            //   // let position = null;
            //   // let fullName = null;

            //   department = await page.evaluate(
            //     (el) => el.querySelector('h2 > a')?.textContent,
            //     element
            //   );

            // position = await page.evaluate(
            //   (el) => el.querySelector('.name > span')?.textContent,
            //   innerElement
            // );

            // fullName = await page.evaluate(
            //   (el) => el.querySelector('.full-name > span')?.textContent,
            //   innerElement
            // );

            // const { shoulderMark, rank } = getShoulderMarkImg(
            //   position,
            //   fullName,
            //   unit.structure
            // );

            // let employee = {
            //   fullName,
            //   unitName: unit.unitName,
            //   position,
            //   department,
            //   shoulderMarkImg: shoulderMark,
            //   rank,
            //   area: unit.area,
            // };

            // console.log(employee);

            // try {
            //   const response = await fetch(`http://localhost:8000/employee`, {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(employee),
            //   });

            //   if (response.ok) {
            //     console.log('Data saved successfully');
            //   } else {
            //     console.error('Error saving data:', response.statusText);
            //   }
            // } catch (error) {
            //   console.error('Error saving data:', error);
            // }
            // }
          } catch (err) {}
        }
      }

      if (unit.structure === 'DGLP' || unit.structure === 'DISTRICT') {
        const mainPositions = await page.$$('.positions > .position');

        for (let element of mainPositions) {
          let position = null;
          let fullName = null;

          position = await page.evaluate(
            (el) => el.querySelector('.name > span')?.textContent,
            element
          );

          fullName = await page.evaluate(
            (el) => el.querySelector('.full-name > span')?.textContent,
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
          };

          console.log(employee);

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
              };

              console.log(employee);

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
    console.log('unit', unit.unitName);
    console.log({ openDelay });

    await scrapUnitData(openDelay, unit);
  }
  const finish = Date.now();
  console.log(`done in ${Math.round((finish - start) / 60000)} minutes`);
}

scrapManyUnits().then(() => console.log('Scrapping finished'));
