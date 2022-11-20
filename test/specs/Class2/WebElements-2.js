/* 
          Steps:
          1. Launch https://www.darksky.net/
          2. Enter a zip code in the search box
          3. Click on search button
          4. print the 'feels like temp' value (without degree sign) in console
      */

it("TC-1", async () => {
  /* 
          Steps:
          1. Launch https://www.darksky.net/
          2. Enter a zip code in the search box
          3. Click on search button
          4. print the 'feels like temp' value (without degree sign) in console
      */

  // 1. Launch https://www.darksky.net/
  await browser.url("https://www.darksky.net/");

  // 2. Enter a zip code in the search box
  const searchBarField = await $("input[type=text]");
  // searchBarField.click();
  searchBarField.setValue("11214");

  // 3. Click on search button
  const searchButton = await $(".searchButton");
  await searchButton.click();

  await browser.pause(2000);

  // 4. print the 'feels like temp' value (without degree sign) in console
  const feelsLikeTempElement = await $(".feels-like-text");
  const tempValue = await feelsLikeTempElement.getText();
  let lOfStr = tempValue.length;
  console.log(tempValue.slice(0, lOfStr - 1));
});

it.only("Verify no gender error on Facebook SignUp", async () => {
  /**
   * 1. Launch facebook.com
   * 2. Click Create New Account button
   * 3. Enter Data for Sign Up(except the gender)
   * 4. Click Sign Up button
   * 5. Verify error is displayed -> Please choose a gender. You can change who can see this later.
   */
  // 1. Launch facebook.com
  await browser.url("/");

  // 2. Click Create New Account button
  const createNewAccountButton = await $("=Create new account");
  createNewAccountButton.click();

  await browser.pause(3000);

  // 3. Enter Data for Sign Up(except the gender)
  await $('//input[@aria-label="First name"]').setValue("FIRST");

  await $('//input[contains(@name , "last")]').setValue("LAST");

  await $('//input[@name="reg_email__"]').setValue("9898989898");

  await $('//input[contains(@id , "word_")]').setValue("abcd@1234");

  await $('//select[@title="Day"]').selectByVisibleText("20");

  await $('//select[contains(@name , "ay_m")]').selectByVisibleText("Mar");

  await $('//select[contains(@id , "ear")]').selectByVisibleText("1990");

  const webElement = await $("#js_1zw");
  webElement.isDisplayed();
  expect(genderIsDisplayed);

  await browser.pause(3000);

  // 4. Click Sign Up button
  // add code

  // 5. Verify error is displayed -> Please choose a gender. You can change who can see this later.
});
