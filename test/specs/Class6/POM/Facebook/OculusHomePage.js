const Commands = require('../Commands')

class OculusHomePage {

    commands = new Commands();

    oculusButtonLocator = '=Oculus'
    supportTabLocator = '//span[text()="Support"]';

    async clickOculusButton() {
        await this.commands.clickWebElement(this.oculusButtonLocator)
    }
    async isSupportTabButtonDisplayed(){
        return await this.commands.isWebElementDisplayed(this.supportTabLocator);
    }
    async fbLoginHandle(){
        return await browser.getHandle()
    }
    async goToOculusWindow(){
        const fbLoginHandle = await browser.getWindowHandle();
            const allHandles = await browser.getWindowHandles();
            for (const handle of allHandles) {
                if (handle !== fbLoginHandle) {
                    browser.switchToWindow(handle);
                    break;
                }
            }
       }
 





}
module.exports = OculusHomePage;