export class loginPage{
    weblocators={
        searchIpnput:'.form-control',
        searchButton:'.input-group-btn > .btn',
        product:'img[title="MacBook"]',
        addtocart:'Add to Cart',

        SucessMessage:'.alert'
    }
    searchProduct(productName){
        cy.get(this.weblocators.searchIpnput).type(productName)
        cy.get(this.weblocators.searchButton).click()
    }
    addToCart(){
        //cy.get(this.weblocators.product).click()
        cy.contains(this.weblocators.addtocart).first().click()
    }
    VerifyMessage(){
        return cy.get(this.weblocators.SucessMessage)
    }
}
export default loginPage;