const Commands = require('../Commands')

class MetaPay {

    commands = new Commands()

   metaPayLocator = '=Meta Pay'
   usingMetaPayLocator = '=Using Meta Pay'
   onlineCheckoutLocator = '=Online Checkout'


   async clickMetaPayButton() {
    await this.commands.clickWebElement(this.metaPayLocator)
}
async isUsingMetaPayButtonDisplayed(){
    return await this.commands.isWebElementDisplayed(this.usingMetaPayLocator);
}
async moveMouseToUsingMetaPay(){
    await this.commands.moveMouseOn(this.usingMetaPayLocator)
}
async isOnlineCheckoutDisplayed(){
    return await this.commands.isWebElementDisplayed(this.onlineCheckoutLocator);
}

async closeWindowsExceptMetaPay(){
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const title = await browser.getTitle();
        if (!title.startsWith('Meta Pay')) {
            await browser.closeWindow();
        }
    }
}

}
module.exports = MetaPay;