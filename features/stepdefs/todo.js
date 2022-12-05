const puppeteer = require('puppeteer')
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')

// this nasil kullaniliyor, page constant'ini nasil this ile global variable yapabilirim
// getContent'i yanlis mi kullaniyorum? selector'lerin dogru olduguna eminim ama content'i cekemiyor
// 'clicks the button' ve 'chooses the color green' functionunu abstract yazmali miyim


Given("john wick is on the homepage", async function () {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://vue3-note.netlify.app/');
    // await page.waitForSelector('#app > header')
    // var element = await page.$('#app > header')
    // var value = element.getContent

    // console.log(value)
    // const vue3 = 'Vue 3 note app';
    // assert.strictEqual(value, "Add Note")
});
When("john wick filled the title as {string}", async function (string) {
    await this.page.type("#app > main > form > input", string);
})
When("john wick filled the description as {string}", async function (string) {
    await this.page.type("#app > main > form > textarea", string);
})
When("john wick chooses the color green", async () => {
    await this.page.click("#app > main > form > div > div:nth-child(2) > input");
})
When("john wick clicks the button Add Note", async () => {
    await this.page.click("#app > main > form > div > button");
})
Then("john wick should see a new green note", async () => {
    await this.page.waitForSelector("#app > main > div.m-2 > div > p");
    var noteSelector = await this.page.$("#app > main > div.m-2 > div > p")
    var noteTime = noteSelector.getContent
    assert.strictEqual(noteTime, "a few seconds ago")
    await this.browser.close()
})