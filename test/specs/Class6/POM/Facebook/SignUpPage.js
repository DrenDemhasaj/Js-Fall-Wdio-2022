const Commands = require('../Commands');
const MomentFunctions = require('../Utils/MomentFunctions')

class SignUpPage{

    commands = new Commands()
    momentFunctions = new MomentFunctions();
    
    dayDropdownLocator = '#day';
    monthDropdownLocator = '#month';
    yearDropdownLocator = '#year';

 createNewAccountLocator = '//a[text()="Create New Account" or text()="Create new account"]';
 todaysDateLocator = '//span[@data-type="selectors"]'
 defaultSelectedInDateLocator = '//select[@id="day"]//option[@selected="1"]';
 defaultSelectedInMonthLocator = '//select[@id="month"]//option[@selected="1"]';
 defaultSelectedInYearLocator = '//select[@id="year"]//option[@selected="1"]';


async clickCreateNewAccountButton() {
    await this.commands.clickWebElement(this.createNewAccountButtonLocator);
}

async isdateOnWebDisplayed() {
    const now = this.momentFunctions.l_lFormat()
    return await $(this.todaysDateLocator).isDisplayed(now)
}
   // functions to interact with web-Elements on sign-up page
   getDefaultSelectedDate() {
    return this.commands.getTextOfWebElement(this.defaultSelectedInDateLocator);
}

getDefaultSelectedMonth() {
    return this.commands.getTextOfWebElement(this.defaultSelectedInMonthLocator);
}

getDefaultSelectedYear() {
    return this.commands.getTextOfWebElement(this.defaultSelectedInYearLocator);
}

selectBirthDate(date) {
    this.commands.selectDataInDropdown(this.dayDropdownLocator, date);
}

selectBirthMonth(month) {
    this.commands.selectDataInDropdown(this.monthDropdownLocator, month);
}

selectBirthYear(year) {
    this.commands.selectDataInDropdown(this.yearDropdownLocator, year);
}

selectBirthData(birthDate) {
    /*
        '10 Aug 1998'

        '10' 'Aug' '1998'
    */
   const birthDateArray = birthDate.split(' ');     // '10' , 'Aug' , '1998'
   this.selectBirthDate(birthDateArray[0]);
   this.selectBirthMonth(birthDateArray[1]);
   this.selectBirthYear(birthDateArray[2]);

}

// example to use moveMouseOn in POM-functions
moveMouseOnBirthDate() {
    this.commands.moveMouseOn(this.dayDropdownLocator);
}





}
module.exports = SignUpPage