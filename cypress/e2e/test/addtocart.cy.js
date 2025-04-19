/// <reference types="cypress" />
import loginPage from '../../pages/loginpage'
const loginObj = new loginPage()
import logindata from '../../fixtures/logindata.json'
describe(' test automation', () => {
    before(() => {
        cy.login(logindata.login.email, logindata.login.Password)

    })


    it('Login flow', () => {
        loginObj.searchProduct(logindata.product.productName)
        loginObj.addToCart()
        cy.wait(4000)
        loginObj.VerifyMessage().should('contain',logindata.message.sucessMessage).and('contain', logindata.product.productName);




    })
})