const puppeteer = require('puppeteer');

const units = [
  //   {
  //     structure: 'RDLP',
  //     structureLong: 'regionalna-dyrekcja-lp',
  //     name: 'lodz',
  //     supervisionName: '',
  //   },
  {
    structure: 'District',
    structureLong: 'nadlesnictwo',
    name: 'bogdaniec',
    supervisionName: '.szczecin',
  },
  //   {
  //     structure: 'RDLP',
  //     structureLong: 'regionalna-dyrekcja-lp',
  //     name: 'szczecin',
  //   },
];

for (let unit of units) {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    await page.goto(
      `https://www.${unit.name}${unit.supervisionName}.lasy.gov.pl/${unit.structureLong}`
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

      console.log(`${fullName} -- ${position}`);
    }

    const secondaryPositions = await page.$$('.departments > .department');

    // const secondaryPositionsDepartments = await page.$$(
    //   '.departments > .department > .department-data > .department-positions'
    // );

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

          console.log(` ${fullName} -- ${position} -- ${department}`);
        }
      } catch (err) {}
    }

    // const secondaryPositions = await page.$$('.departments > .department');

    // console.log(
    //   await page.$$(
    //     '.departments > .department > .department-data > .department-positions'
    //   )
    // );

    // for (let element of secondaryPositions) {
    //   let position = null;
    //   let fullName = null;
    //   let department = null;
    //   try {
    //     position = await page.evaluate(
    //       (el) => el.querySelector('.name > span').textContent,
    //       element
    //     );

    //     fullName = await page.evaluate(
    //       (el) => el.querySelector('.full-name > span').textContent,
    //       element
    //     );

    //     department = await page.evaluate(
    //       (el) => el.querySelector('h2 > a').textContent,
    //       element
    //     );
    //   } catch (err) {}

    //   console.log(` ${fullName} -- ${position} -- ${department}`);
    // }

    //   await browser.close();
  })();
}
