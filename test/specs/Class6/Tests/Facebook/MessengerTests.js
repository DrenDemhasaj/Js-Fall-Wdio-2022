const Messenger = require('../../POM/Facebook/Messenger')
const { expect } = require("chai");
const { it } = require("mocha");

describe('Messenger Test Suite', () => {
    it('Verify empty messenger login flow',async () => {
        const messenger = new Messenger()
        await browser.url('https://www.facebook.com');
        // await browser.pause(3000)   
        await messenger.ClickMessengerLink()
        await messenger.ClickLogInButton()
        await browser.pause(1000)
        expect(await messenger.errorMsgIsDisplayed(), "Error message is not displayed").to.be.true
        expect(await messenger.keepMeSignedInButtonIsSelected(), "Keep me signed in button is already selected").to.be.false
        expect(await messenger.findAccountErrorMsgIsDisplayed(), "message is not displayed").to.be.true
        expect(await messenger.continueBtnEnabled(),'Continue button is NOT enabled').to.be.true
        expect(await messenger.keepSignedInBoxIsSelected(), "Keep me signed in box is selected").to.be.false
        await messenger.clickKeepSignedInCheckBox()
        await browser.pause(3000)
        expect(await messenger.keepSignedInBoxIsSelected(), "Keep me signed in box is selected").to.be.true

    });
    
});