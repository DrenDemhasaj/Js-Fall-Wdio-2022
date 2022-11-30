const { expect } = require("chai");

describe('Mouse Hover Tests', () => {

    it('Mouse Hover Test-1', async () => {
    
     /**
         * 1. Launch yahoo.com
         * 2. Move mouse on notifications-icon
         * 3. Verify notifications is displayed
         */

     //Launch yahoo.com
     await browser.url('https://wwww.yahoo.com')

     //.Move mouse on notifications-icon


/**
 * To perform mouse hover on a webElement
 * function moveTo()
 */
        //a. find web element
        //b. use moveTo()
        const bellIcon = await $('#ybarNotificationMenu');

        await bellIcon.moveTo()

        await browser.pause(3000)

        //Verify notifications is displayed 
        const isNotificationsDisplayed = await $('//span[text()="Notifications"]').isDisplayed();

        expect( isNotificationsDisplayed, 'Notifications pop-up is not displayed').to.be.true;

    });
    
});