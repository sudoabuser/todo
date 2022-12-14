const puppeteer = require('puppeteer')
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
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

Given("there are 2 purple 1 green notes", async () => {
    /* add a green note */
    await page.goto('https://vue3-note.netlify.app/');
    await page.type("#app > main > form > input", "cat");
    await page.type("#app > main > form > textarea", "don't forget to feed Garfield");
    await page.click("#app > main > form > div > div:nth-child(2) > input");
    await page.click("#app > main > form > div > button");

    /* add a purple note */
    await page.type("#app > main > form > input", "gym");
    await page.type("#app > main > form > textarea", "don't be lazy, hit the gym at 7:30 PM");
    await page.click("#app > main > form > div > div:nth-child(6) > input");
    await page.click("#app > main > form > div > button");

    /* add a purple note */
    await page.type("#app > main > form > input", "grandma");
    await page.type("#app > main > form > textarea", "take a walk with the grandmom this evening as you promised");
    await page.click("#app > main > form > div > div:nth-child(6) > input");
    await page.click("#app > main > form > div > button");
})

/* sort same colors */
When("john wick sorts purple notes", async () => {
    await page.click("button.btn:nth-child(7)");
})

Then("john wick should see only 2 purple notes", async () => {
    var divCount = await page.$$('main > div:nth-child(3) > div')
    console.log(divCount.length)

    assert.strictEqual(divCount.length, 2)
    await browser.close()
})

/* all colors */
When("john wick clicks the button All", async () => {
    await page.click('main > div > button:nth-child(1)');
})

Then("john wick should see all the notes", async () => {
    var divCount = await page.$$('main > div:nth-child(3) > div')
    console.log(divCount.length)

    assert.strictEqual(divCount.length, 3)
    await browser.close()
})