describe('WebElement Test cases', () =>{

    it('Test case using Id locator', async ()=>{

await browser.url('/')

const logInEmailInputBox = await $('#email')
logInEmailInputBox.setValue('deepak@gmail.com')

const loginPwdInputBox = await $('#pass')
loginPwdInputBox.setValue('abcd@1234')

await browser.pause(10000)
    })
})