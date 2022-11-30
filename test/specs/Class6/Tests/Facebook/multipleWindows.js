const { expect } = require("chai");
const OculusHomePage = require('../../POM/Facebook/OculusHomePage');
const Instagram = require('../../POM/Facebook/Instagram');
const Portal = require('../../POM/Facebook/Portal');
const MetaPay = require('../../POM/Facebook/MetaPay');

describe('Multiple Windows Tests', () => {
    
    /**
     * To get the windowHandle stored in browser-object
     * function: getWindowHandle()
     */

    /**
     * To get the ALL windowHandles for windows opened due to automation code
     * function: getWindowHandles()
     */

    /**
     * To change/switch the handle value in browser-object
     * function: switchToWindow()
     */

    /**
     * To close the window which is connected with browser-object
     * function: closeWindow()
     */

    it('Multiple Windows Test - 1', async () => {
        const oculusHP = new OculusHomePage()

        
        /**
         * 1. Launch facebook.com
         * 2. Click on Oculus
         * 3. Verify Support tab is displayed
         * 4. Verify the Oculus page is launched in new window;
         * 
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com')

        // 2. Click on Oculus
        await oculusHP.clickOculusButton();
        await browser.pause(6000);
        /**
         * connect browser with Oculus window
         */
            await oculusHP.goToOculusWindow()

        await browser.pause(6000);


        // 3. Verify Support tab is displayed
        expect (await oculusHP.isSupportTabButtonDisplayed(), 'Support tab link is NOT displayed').to.be.true;

        // 4. Verify the Oculus page is launched in new window
        expect(allHandles.length, '').to.equal(2);

    });

    it.only('Close all Windows except Facebook Pay', async () => {
        const oculusHP = new OculusHomePage()
        const instagram = new Instagram()
        const portal = new Portal()
        const metaPay = new MetaPay()
        /**
         * 1. Launch facebook.com
         * 2. Click on Instagram
         * 3. Click on Portal
         * 4. Click on Oculus
         * 5. Click on Meta Pay
         * 6. Close all windows except 'Meta Pay' window
         * 7. Verify 'Using Meta Pay' is displayed
         * 8. Move mouse on 'Using Meta Pay'
         * 9. Verify 'Online Checkout' option is displayed
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com')

        // 2. Click on Instagram
        await instagram.clickInstagramButton();

        // 3. Click on Portal
        await portal.clickPortalButton();

        // 4. Click on Oculus
        await oculusHP.clickOculusButton();

        // 5. Click on Meta Pay
        await metaPay.clickMetaPayButton();

        // 6. Close all windows except 'Meta Pay' window
        /*
            switch on every window
            if title NOT starts with 'Meta Pay'
                close window
        */
        await metaPay.closeWindowsExceptMetaPay()

        await browser.pause(5000);
        //7. Verify 'Using Meta Pay' is displayed
        expect(await metaPay.isUsingMetaPayButtonDisplayed(), 'Using meta pay is NOT displayed').to.be.true;
        //8. Move mouse on 'Using Meta Pay'
        await metaPay.moveMouseToUsingMetaPay()
        await browser.pause(5000);
        //9. Verify 'Online Checkout' option is displayed
        expect(await metaPay.isOnlineCheckoutDisplayed(), 'online checkout is NOT displayed').to.be.true;




    });


});