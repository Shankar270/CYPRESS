/// <reference types="cypress" />
import registerPage from '../../pages/registerPage'
const registerObj = new registerPage()
import registerdata from '../../fixtures/registerdata.json'
describe(' test automation', () => {



    it('register flow', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registerdata.firstName)
        registerObj.enterlastName(registerdata.lastName)
        registerObj.enterEmail(registerdata.email)
        registerObj.enterTelephone(registerdata.telephone)
        registerObj.enterPassword(registerdata.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()



    })
})