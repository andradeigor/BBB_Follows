const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();
const profiles = [
  "fiuk",
  "sarah_andrade",
  "gilnogueiraofc",
  "juliette.freire",
  "afiune_caio",
  "camilladelucas",
  "carladiaz",
  "joaolpedrosa",
  "pocah",
  "irodolffo",
  "thaisfbraz",
  "viihtube",
];

const loginInstagram = async (profiles) => {
  const dataraw = fs.readFileSync("./data.json", "utf8");
  let data = await JSON.parse(dataraw);
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/accounts/login/");
  await page.waitForTimeout(Math.random() * (2000 - 1000) + 1000);
  await page.type('[name="username"]', process.env.INSTAUSER);
  await page.waitForTimeout(Math.random() * (1000 - 500) + 500);
  await page.type('[name="password"]', process.env.INSTASENHA);
  await page.waitForTimeout(Math.random() * (1000 - 500) + 500);
  await page.$eval('[type="submit"]', (form) => form.click());
  await page.waitForTimeout(Math.random() * (2500 - 2000) + 2000);
  await page.goto("https://www.instagram.com");
  await page.waitForTimeout(Math.random() * (1000 - 500) + 500);
  await page.evaluate(() => {
    [...document.querySelectorAll("button")]
      .find((element) => element.textContent === "Not Now")
      .click();
  });
  let result = [];
  while (true) {
    for (i = 0; i < profiles.length; i++) {
      await page.goto(`https://www.instagram.com/${profiles[i]}`);
      data[i].profileFollows = await page.$$eval("[title]", (match) =>
        match[1].getAttribute("title")
      );
      data = await JSON.stringify(data);
      fs.writeFile("./data.json", data, (err) => {
        if (err) {
          console.log(err);
        }
      });
      data = await JSON.parse(data);
    }
  }

  await browser.close();
};

async function main() {
  loginInstagram(profiles);
}

main();
