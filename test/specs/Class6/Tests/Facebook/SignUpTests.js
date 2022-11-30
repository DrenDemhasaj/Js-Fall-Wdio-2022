const SignUpPage = require("../../POM/Facebook/SignUpPage");
const { expect } = require("chai");
const { it } = require("mocha");

describe("Sign-up Test Suit", () => {
  it("Verify current date is displayed on Sign-Up form", async () => {
    const signUpPage = new SignUpPage();
    await browser.url("https://www.facebook.com");
    signUpPage.clickCreateNewAccountButton();
    await browser.pause(5000);
    expect(await signUpPage.isdateOnWebDisplayed(), " This is not todays Date").to.be.true;
  });

});
//input[@name="persistent"]