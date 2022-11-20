const { expect } = require("chai");
const { it } = require("mocha");
const moment = require("moment");

// Due date: Nov 21 (Mon)

/**
 * TC-1: https://www.facebook.com/
 * Facebook: Verify current date is displayed on Sign-Up form
 *
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account button
 * 3. Verify current date is displayed in Date of birth dropdowns
 *
 */

/**
 * TC-2: https://www.facebook.com/
 * Facebook: Verify user gets error when submits empty login form
 *
 * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */

/**
 * TC-3: https://www.facebook.com/
 * Facebook: Verify user gets error when submit empty login on messenger screen
 *
 * 1. Click Messenger
 * 2. Verify "Keep me signed in" is NOT selected
 * 3. Click "Log in" button
 * 4. Verify link (Find your account and log in.) is displayed
 * 5. Verify "Continue" button is enabled
 * 6. Verify "Keep me signed in" is NOT selected
 * 7. Click "Keep me signed in" checkbox
 * 8. Verify "Keep me signed in" is selected
 *
 */

/**
 * TC-4: https://www.darksky.net/
 * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue
 *
 * 31˚(string) -> 31(string) -> 31(number)
 * 25˚(string) -> 25(string) -> 25(number)
 * 39˚(string) -> 39(string) -> 39(number)
 *
 * feelsLikeTempValue <= lowTempValue AND feelsLikeTempValue <= highTempValue
 *
 */

describe("WebElements Test cases", () => {
// Test case #1
it("Verify current date is displayed on Sign-Up form", async () => {
 
    //enter Facebook.com
    await browser.url("/");
    await browser.pause(1000);
    // enter create new account
    const createNewAccountButton = await $("=Create new account");
    //click create new account
    createNewAccountButton.click();
    await browser.pause(5000);
    const now = moment().format('ll');
    const todaysDate = await $('//span[@data-type="selectors"]');
    const verifyTodaysDate = await todaysDate.isDisplayed(now)
    

    // const result = todaysDate === now
    expect(verifyTodaysDate, " This is not todays Date").to.be.true

    console.log(`todays date is ->${todaysDate}`);
});
// test case #2
it('Verify user gets error when submits empty login form',async () => {
    await browser.url("/");
    
    const loginButton = await $('button[name=login]');
    await loginButton.click();

    await browser.pause(5000);
    const loginErrorText = await $('div*=Invalid username or password');
    const isLoginErrorTextDisplayed = await loginErrorText.isDisplayed();
    expect(isLoginErrorTextDisplayed, 'Login error text is NOT displayed').to.be.true;
});
// test case #3
it('Verify user gets error when submit empty login on messenger screen',async () => {
    // go to facebook.com
    await browser.url("/");

    //Click Messenger
    const messengerLink = await $('*=Messenger').click()

    // Click "log in" button
    const logInButton = await $('button[name=login]').click()
    await browser.pause(5000)

    //Verify user gets error when submit empty login on messenger screen
   const errorMsg = await $('div*=Wrong Credentials').isDisplayed()
    expect(errorMsg, "Error message is not displayed").to.be.true

    // Verify "Keep me signed in" is NOT selected
    const keepMeSignedInButton = await $('//label[contains(text(),"Keep me signed in")]').isSelected()
    expect(keepMeSignedInButton, "Keep me signed in button is already selected").to.be.false

    //Verify link (Find your account and log in.) is displayed (was changed by messenger so i did the invalid username or password )
    const findAccountErrorMsg = await $('div*=Invalid username or password').isDisplayed()
    expect(findAccountErrorMsg, "message is not displayed").to.be.true

    await browser.pause(2000)

    //5. Verify "Continue" button is enabled
    const continueBtnEnabled = await $('button=Continue').isEnabled()
    expect(continueBtnEnabled, 'Continue button is NOT enabled').to.be.true
    
    await browser.pause(2000)
    //Verify "Keep me signed in" is NOT selected
    const keepSignedInBox = await $('input[type="checkbox"]').isSelected()
    expect(keepSignedInBox, "Keep me signed in box is selected").to.be.false

    //Click "Keep me signed in" checkbox
    await $('//span[@class=""]').click()
    await browser.pause(2000)

    //Verify "Keep me signed in" is selected
    const selectedSignInBox = await $('input[type="checkbox"]').isSelected()
    expect(selectedSignInBox, 'Keep me signed in box is selected').to.be.true
    
});
// test case #4
it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async () => {
    //go to darksky.net
    await browser.url('https://darksky.net')
    await browser.pause(2000)
    // find the feels like field and convert the string into a number 
    const feelsLikeField = parseFloat(await $('.feels-like-text').getText())
    // find the low temp field and convert the string into a number 
    const lowTempField = parseFloat(await $('.low-temp-text').getText())
    // find the high temp field and convert the string into a number 
    const highTempField = parseFloat(await $('.high-temp-text').getText())
    //checking if the feels like is in between the 2 temperatures 
    expect (feelsLikeField <= highTempField && feelsLikeField >= lowTempField, "NOT Working").to.be.true;
    // a little printing action
    console.log(`\nfeelsLikeField -> ${feelsLikeField}`) 
    console.log(`\nlowTempField -> ${lowTempField}`)
    console.log(`\nhighTempField -> ${highTempField}`)

});

});
