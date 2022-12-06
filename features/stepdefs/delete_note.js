// const puppeteer = require('puppeteer')
// const { Given, When, Then, Before } = require('@cucumber/cucumber');
// const assert = require('assert')

// let browser;
// let page;

// Before(async function () {
//     browser = await puppeteer.launch({ headless: false });
//     page = await browser.newPage()
// })


// Given("there is just one green note added", async () => {
//     await page.goto('https://vue3-note.netlify.app/');
//     await page.type("#app > main > form > input", "homework");
//     await page.type("#app > main > form > textarea", "do your math homework");
//     await page.click("#app > main > form > div > div:nth-child(2) > input");
//     await page.click("#app > main > form > div > button");
// });


// When("john wick hovered the note, clicked delete and accepted the dialog", async () => {
//     page.on('dialog', async dialog => {
//         console.log(dialog.message());
//         await dialog.accept();
//     })
//     await page.hover("#app > main > div.m-2.grid.grid-cols-1 > div")
//     await page.waitForTimeout(1000)
//     await page.click("#app > main > div.m-2.grid.grid-cols-1 > div > button")
//     await page.waitForTimeout(1000)
// })


// Then("john wick should see no notes yet warning", async () => {
//     const noNotesYetSel = await page.$("body > div > main > div.flex-col > p")
//     let noNotesYetText = await page.evaluate(el => el.textContent, noNotesYetSel)
//     console.log(noNotesYetText);

//     assert.strictEqual(noNotesYetText, "No notes yet")
//     await browser.close()
// })
