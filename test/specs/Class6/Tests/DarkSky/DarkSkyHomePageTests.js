const DarkSkyHomePage = require('../../POM/DarkSky/DarkSkyHomePage')
const { expect } = require("chai");
const { it } = require("mocha");

describe('DarSky HomePage Flow', () => {

    it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async() => {
       const darkSky = new DarkSkyHomePage
        await browser.url('https://darksky.net')
        await browser.pause(2000)
        expect (darkSky.TextOfFeelsLikeField() <= darkSky.TextOfHighTempField() && darkSky.TextOfFeelsLikeField() >= darkSky.TextOfLowTempField(), "NOT Working").to.be.true;
    });
    
});
