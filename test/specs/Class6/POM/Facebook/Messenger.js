const Commands = require('../Commands');

class Messenger {

    commands = new Commands()

    messengerLinkLocator = '*=Messenger'
    logInButtonLocator = 'button[name=login]'
    errorMsgLocator = 'div*=Wrong Credentials'
    keepMeSignedInButtonLocator = '//label[contains(text(),"Keep me signed in")]'
    findAccountErrorMsgLocator = 'div*=Invalid username or password'
    continueBtnLocator = 'button=Continue'
    keepSignedInBoxLocator = '//input[@name="persistent"]'
    keepSignedInCheckBoxLocator = '//span[@class=""]'

    async ClickMessengerLink() {
        await this.commands.clickWebElement(this.messengerLinkLocator)
    }
    async ClickLogInButton() {
        await this.commands.clickWebElement(this.logInButtonLocator)
    }
    async errorMsgIsDisplayed(){
       return await this.commands.isWebElementDisplayed(this.errorMsgLocator)
    }
    async keepMeSignedInButtonIsSelected(){
        return await this.commands.isWebElementSelected(this.keepMeSignedInButtonLocator)
    }
    async findAccountErrorMsgIsDisplayed(){
        return await this.commands.isWebElementDisplayed(this.findAccountErrorMsgLocator)
    }
    async continueBtnEnabled(){
        return await this.commands.isWebElementEnabled(this.continueBtnLocator)
    }
    async keepSignedInBoxIsSelected(){
        return await this.commands.isWebElementSelected(this.keepSignedInBoxLocator)
    }
    async clickKeepSignedInCheckBox(){
        await this.commands.clickWebElement(this.keepSignedInCheckBoxLocator)
    }




}

module.exports = Messenger