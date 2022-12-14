const puppeteer = require('puppeteer')
const { Given, When, Then, Before, After} = require('@cucumber/cucumber');
const assert = require('assert')

let browser;
let page;

Before(async function () {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage()
})
After(async function () {
    await browser.close()
})

Given("john wick is on the homepage", async function () {
    await page.goto('https://vue3-note.netlify.app/');
    await page.waitForSelector('#app > header')
    var header = await page.$('#app > header')
    let headerText = await page.evaluate(el => el.textContent, header)
    const vue3 = ' Vue 3 note app '

    assert.strictEqual(headerText, vue3)
});

When("john wick filled the title as {string}", async function (string) {
    await page.type("#app > main > form > input", string);
})

When("john wick filled the description as {string}", async function (string) {
    await page.type("#app > main > form > textarea", string);
})

When("john wick chooses the color green", async () => {
    await page.click("#app > main > form > div > div:nth-child(2) > input");
})

When("john wick clicks the button Add Note", async () => {
    await page.click("#app > main > form > div > button");
})

Then("john wick should see a new green note", async () => {
    await page.waitForSelector("#app > main > div.m-2 > div > p");

    var noteSelector = await page.$("#app > main > div.m-2 > div > p")
    let noteTime = await page.evaluate(el => el.textContent, noteSelector)

    assert.strictEqual(noteTime, "a few seconds ago")
    await browser.close()
})