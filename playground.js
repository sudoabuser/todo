const puppeteer = require('puppeteer')
const assert = require('assert')
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://vue3-note.netlify.app/');

    var count = await $('#app div').length;
    console.log(count)

    // const noNotesYetSel = await page.$("body > div > main > div.flex-col > p")
    // let noNotesYetText = await page.evaluate(el => el.textContent, noNotesYetSel)
    // console.log(noNotesYetText);
    await browser.close()

    //     // add note
    //     await page.type("#app > main > form > input", "homework");
    //     await page.type("#app > main > form > textarea", "do your math homework");
    //     await page.click("#app > main > form > div > div:nth-child(2) > input");
    //     await page.click("#app > main > form > div > button");


    //     // // delete note 
    //     page.on('dialog', async dialog => {
    //         console.log(dialog.message());
    //         await dialog.accept();
    //     })
    //     await page.hover("#app > main > div.m-2.grid.grid-cols-1 > div")
    //     await page.waitForTimeout(1000)
    //     await page.click("#app > main > div.m-2.grid.grid-cols-1 > div > button")
    //     await page.waitForTimeout(1000)


    //     // no notes yet alert



    //     // main page check 
    //     const element = await page.$(".py-2");
    //     const text = element.getContent;
    //     console.log(text);
    //     await page.waitForTimeout(1000);
    //     await browser.close();
}

main();