export class Demo {
    
    firstName= ':nth-child(1) > :nth-child(2) > .form-control';
    lastName=':nth-child(1) > :nth-child(3) > .form-control';
    Address='textarea[ng-model="Adress"]';
    EmailID='input[ng-model="EmailAdress"]'

    openURL() {

        cy.visit(Cypress.env('DemoSite'))
    }
    name(FName,LName){
        cy.get(this.firstName).type(FName)
        cy.log(FName)
        cy.get(this.lastName).type(LName)
    }
    MyAddress(Addresss){
        cy.get(this.Address).type(Addresss)
    }
    ProvideEmail(Email){
        cy.get(this.EmailID).trigger('mouseover');
        cy.get(this.EmailID).type(Email)
        
    }
}
export  default Demo;
