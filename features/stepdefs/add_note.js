const puppeteer = require('puppeteer')
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert')
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);


let browser;
let page;

Before(async function () {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage()
})


// Before({tags:"@Setup" }, async () => {
// })



/* add_note */
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
/* add_note end*/


/* delete_note */
Given("there is just one green note added", async () => {
    await page.goto('https://vue3-note.netlify.app/');
    await page.type("#app > main > form > input", "homework");
    await page.type("#app > main > form > textarea", "do your math homework");
    await page.click("#app > main > form > div > div:nth-child(2) > input");
    await page.click("#app > main > form > div > button");
});


When("john wick hovered the note, clicked delete and accepted the dialog", async () => {
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.hover("#app > main > div.m-2.grid.grid-cols-1 > div")
    await page.waitForTimeout(1000)
    await page.click("#app > main > div.m-2.grid.grid-cols-1 > div > button")
    await page.waitForTimeout(1000)
})


Then("john wick should see no notes yet warning", async () => {
    const noNotesYetSel = await page.$("body > div > main > div.flex-col > p")
    let noNotesYetText = await page.evaluate(el => el.textContent, noNotesYetSel)
    console.log(noNotesYetText);

    assert.strictEqual(noNotesYetText, "No notes yet")
    await browser.close()
})
/* delete_note end*/


/* same_color_notes */
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


When("john wick sorts purple notes", async () => {
    await page.click("button.btn:nth-child(7)");
})


/*----------=derdim burada=----------*/
/*
* simdi sorunum su sekilde: benim bu then'deki amacim 2 purple 1 green nottan 
* purple olanlari filtrelemek, bunu yapmak icin de divleri (notlari) saymak istiyorum.
* 3 not ekliyorum, filtreledigimde 2 div olmasi gerekiyor. 
* bunun icin 141. satirdaki code snippet'ini kullandim ama ne yaparsam yapayim 0 donduruyor.
* sadece #app id'si ile de denedim gene 0. anlayamadim nerede hata yaptigimi.
*/
/*-----------=derdim bitti=-----------*/
Then("john wick should see only 2 purple notes", async () => {
    await page.waitForSelector('#app')
    var divCount = await $('#app > main > m-2.grid.grid-cols-1 div').length
    console.log(divCount)
    
    assert.strictEqual(divCount, 2)
    await browser.close()
})
/* same_color_notes end*/