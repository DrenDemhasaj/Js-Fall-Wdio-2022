const Commands = require('../Commands');
class DarkSkyHomePage{
    commands = new Commands();

    feelsLikeFieldLocator = '.feels-like-text'
    lowTempFieldLocator = '.low-temp-text'
    highTempFieldLocator = '.high-temp-text'


    async TextOfFeelsLikeField(){
        return parseFloat(await getTextOfWebElement(feelsLikeFieldLocator))
    }
    async TextOfLowTempField(){
        return parseFloat(await getTextOfWebElement(lowTempFieldLocator))
    }
    async TextOfHighTempField(){
        return parseFloat(await getTextOfWebElement(highTempFieldLocator))
    }

}

module.exports = DarkSkyHomePage