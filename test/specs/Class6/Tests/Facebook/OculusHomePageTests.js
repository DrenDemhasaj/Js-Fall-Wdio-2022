const { expect } = require('chai');
const OculusHomePage = require('../../POM/Facebook/OculusHomePage');

describe('Multiple Windows Tests', () => {

it('Multiple Windows Test -1', async () => {
    const oculusHP = new OculusHomePage()

    await browser.url('https://www.facebook.com')

    oculusHP.clickOculusButton();
    
    const fbLoginHandle = await browser.getWindowHandle();
    console.log(` \n fbLoginHandle -> ${fbLoginHandle} \n`);


    const allHandles = await browser.getWindowHandles();            
    console.log(` \n allHandles -> ${allHandles} \n`);

    for (const handle of allHandles) {
        if (handle !== fbLoginHandle) {
            browser.switchToWindow(handle);
            break;
        }
    }

    await browser.pause(6000);
    oculusHP.isSupportTabButtonDisplayed()
    console.log(`\n\n isSupportDisplayed -> ${isSupportDisplayed} \n\n`);
    expect(allHandles.length, '').to.equal(2);
});
    
});