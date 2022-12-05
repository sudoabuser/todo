const puppeteer = require('puppeteer')
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')


Given("john wick is on the homepage", async function(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://vue3-note.netlify.app/');
    await page.waitForSelector('#app > header')
    const element = await page.$('#app > header')
    const value = element.getContent

    console.log(value)
    const vue3 =  'Vue 3 note app'; 
    assert.strictEqual(value, "Add Note") 
    await browser.close();
});