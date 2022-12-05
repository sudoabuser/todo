const puppeteer = require('puppeteer')
const assert = require('assert')


async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://vue3-note.netlify.app/');


    // add note
    await page.type("#app > main > form > input", "homework");
    await page.waitForTimeout(2000)
    await page.type("#app > main > form > textarea", "do your math homework");
    await page.waitForTimeout(2000)
    await page.click("#app > main > form > div > div:nth-child(2) > input");
    await page.waitForTimeout(2000)
    await page.click("#app > main > form > div > button");


    // delete note   buradasin
    page.on('dialog', async dialog => {
        await page.hover("#app > main > div.m-2.grid.grid-cols-1 > div")
        await page.waitForTimeout(2000)
        await page.click("#app > main > div.m-2.grid.grid-cols-1 > div > button")


        await dialog.accept();
        await page.waitForTimeout(5000)
    })


    await page.waitForTimeout(5000)
    await browser.close();

    // main page check 
    // const element = await page.$("#app > main > form > div > button");
    // const text = element.getContent;
    // console.log(text);
    // await page.waitForTimeout(1000);
    // await browser.close();
}

main();