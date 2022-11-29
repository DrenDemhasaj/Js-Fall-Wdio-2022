const Commands = require('../Commands');
const MomentFunctions = require('../Utils/MomentFunctions')

class SignUpPage{

    commands = new Commands()
    momentFunctions = new MomentFunctions();


createNewAccountButtonLocator = "=Create new account"
 todaysDateLocator = '//span[@data-type="selectors"]'

async clickCreateNewAccountButton() {
    await this.commands.clickWebElement(this.createNewAccountButtonLocator);
}

async isdateOnWebDisplayed() {
    const now = this.momentFunctions.l_lFormat()
    return await $(this.todaysDateLocator).isDisplayed(now)
}





}
module.exports = SignUpPage