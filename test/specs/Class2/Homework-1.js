const { expect } = require("chai");
const { it } = require("mocha");

describe("WebElements Test cases", () => {
  //1. Launch facebook.com
  it("Launch facebook.com", async () => {
    //enter facebook.com
    await browser.url("/");

    await browser.pause(1000);
  });

  //2. Click Create New Account
  it("Click Create New Account", async () => {
    //enter Facebook.com
    await browser.url("/");
    await browser.pause(1000);
    // enter create new account
    const createNewAccountButton = await $("=Create new account");
    //click create new account
    createNewAccountButton.click();
    await browser.pause(2000);
  });
  //3. Verify female-gender button is not selected
  it("Verify female-gender button is not selected on Sign up page", async () => {
    // enter Facebook.com
    await browser.url("/");
    // click create account
    const createNewAccountButton = await $("=Create new account");
    createNewAccountButton.click();
    // pause for 2 seconds
    await browser.pause(2000);
    //locate the female radio button
    const femaleRadioButton = await $('input[value="1"]');
    const isFemaleGenderSelected = await femaleRadioButton.isSelected();
    // check if female-gender radio button is not selected
    expect(isFemaleGenderSelected, "Female gender is already selected").to.be
      .false;
  });
  //4. Verify male-gender button is not selected
  it("Verify male-gender button is not selected on Sign up page", async () => {
    //go to facebook.com
    await browser.url("/");
    //locate create new account
    const createNewAccountButton = await $("=Create new account");
    // click create new accont
    createNewAccountButton.click();

    await browser.pause(4000);
    //locate the male radio button
    const maleRadioButton = await $('input[value="2"]');
    const isMaleGenderSelected = await maleRadioButton.isSelected();
    // check if male-gender radio button is not selected
    expect(isMaleGenderSelected, "Male gender is already selected").to.be.false;
  });
  //5. Verify custom-gender button is not selected
  it("Verify custom-gender button is not selected on Sign up page", async () => {
    //go to facebook
    await browser.url("/");
    //locate create new account button
    const createNewAccountButton = await $("=Create new account");
    //click create new account button
    createNewAccountButton.click();

    await browser.pause(4000);
    //locate the male radio button
    const costumRadioButton = await $('input[value="-1"]');
    const isCostumGenderSelected = await costumRadioButton.isSelected();
    // check if custom-gender radio button is not selected
    expect(isCostumGenderSelected, "Costum gender is already selected").to.be
      .false;
  });
  // 7. check if female radio button is selected then select FEMALE radio button and verify it
  it("Verify female-gender button is selected", async () => {
    //go to facebook
    await browser.url("/");
    //locate create new account button
    const createNewAccountButton = await $("=Create new account");
    //click create new account button
    createNewAccountButton.click();
    await browser.pause(4000);
    //locate the female radio button
    const femaleRadioButton = await $('input[value="1"]');
    // check if female radio button is not selected
    const isFemaleGenderSelected = await femaleRadioButton.isSelected();
    expect(isFemaleGenderSelected, "Female gender IS selected").to.be.false;
    //if statment
    if (!isFemaleGenderSelected) {
      //click female gender button
      femaleRadioButton.click();
      //check if button is selected
      const isFemaleGenderSelected = await femaleRadioButton.isSelected();
      expect(isFemaleGenderSelected, "Female gender is already selected").to.be
        .true;

      await browser.pause(5000);
    }
  });

  /**
   * Automate below testcase:
   *
   * Due date: Nov 18 (EOD)
   *
   * TC-1:
   * Steps:
   * 1. Launch facebook.com
   * 2. Click Create New Account
   * 3. Verify female-gender button is not selected
   * 4. Verify male-gender button is not selected
   * 5. Verify custom-gender button is not selected
   * 6. If female gender is NOT selected, then click on female gender radio button
   * 7. Verify female-gender button is selected
   *
   *
   *
   *
   *
   */
});
