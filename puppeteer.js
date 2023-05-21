const puppeteer = require('puppeteer');
const { employees } = require('./db');
const fetch = require('node-fetch');

const units = [
  // {
  //   structure: 'RDLP',
  //   urlStructureLong: 'regionalna-dyrekcja-lp',
  //   urlName: 'bialystok',
  //   urlSupervisionName: '',
  // },
  // {
  //   unitName: 'RDLP w Łodzi',
  //   structure: 'RDLP',
  //   unitUrl: 'https://lodz.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'RDLP w Poznaniu',
  //   structure: 'RDLP',
  //   unitUrl: 'https://poznan.lasy.gov.pl/regionalna-dyrekcja-lp',
  // },
  // {
  //   unitName: 'Nadleśnictwo Gostynin',
  //   structure: 'District',
  //   unitUrl: 'https://gostynin.lodz.lasy.gov.pl/nadlesnictwo',
  // },
  {
    unitName: 'Nadleśnictwo Koło',
    structure: 'District',
    unitUrl: 'https://kolo.poznan.lasy.gov.pl/nadlesnictwo',
  },
  //   {
  //     structure: 'RDLP',
  //     urlStructureLong: 'regionalna-dyrekcja-lp',
  //     urlName: 'szczecin',
  //   },
];

for (let unit of units) {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
      ignoreHTTPSErrors: true,
      ignoreDefaultArgs: ['--disable-extensions'],
    });
    const page = await browser.newPage();

    await page.goto(
      // `https://${unit.urlName}${unit.urlSupervisionName}.lasy.gov.pl/${unit.urlStructureLong}`
      unit.unitUrl
    );

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

    //   await browser.close();
  })();
}
