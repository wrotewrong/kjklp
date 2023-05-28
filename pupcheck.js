const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
// executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
// userDataDir: 'C:/Users/a/AppData/Local/Google/Chrome/User Data/Default',
//     defaultViewport: false,
// ignoreHTTPSErrors: true,
//     ignoreDefaultArgs: ['--disable-extensions'],
//   });
//   const page = await browser.newPage();

//   await page.goto('https://bot.sannysoft.com/');

//   //   await browser.close();
// })();

const sites = [
  'https://mistrzowie.org/',
  'https://mistrzowie.org/poczekalnia',
  'https://mistrzowie.org/728027',
];

async function launchPuppeteerWithDelay(openDelay, site) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      let closeDelay = Math.random() * 10000 + 5000;
      console.log({ closeDelay });
      puppeteer
        .launch({
          headless: false,
          executablePath:
            'C:/Program Files/Google/Chrome/Application/chrome.exe',
          // userDataDir: 'C:/Users/a/AppData/Local/Google/Chrome/User Data',
          ignoreHTTPSErrors: true,
          // args: ['--proxy-server=http://95.175.1.40:3128'],
        })
        .then(async (browser) => {
          console.log('Running...');
          const page = await browser.newPage();
          await page.goto(site);
          // await page.goto('https://www.whatismyip.com/');
          await page.waitForTimeout(closeDelay);
          // await page.screenshot({ path: 'testresult.png', fullPage: true });
          await browser.close();
        });
      console.log(`All done, resolving`);
      resolve();
    }, openDelay);
  });
}

async function launchMultiplePuppeteerInstances() {
  const start = Date.now();

  for (let site of sites) {
    let openDelay = Math.random() * 100000 + 5000;
    console.log({ openDelay });

    await launchPuppeteerWithDelay(openDelay, site);
  }
  const finish = Date.now();
  console.log(`done in ${Math.round((finish - start) / 60000)} minutes`);
}

launchMultiplePuppeteerInstances().then(() =>
  console.log('Scrapping finished')
);
