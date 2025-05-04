/// <reference types="cypress" />
import Demo from '../../pages/demopage'
const DemoAuto = new Demo()
import demodata from '../../fixtures/demodata.json'
describe(' test automation', () => {



    it('register flow', () => {
        DemoAuto.openURL()
        DemoAuto.name(demodata.Fname,demodata.Lname)
        DemoAuto.MyAddress(demodata.Addresss)
        DemoAuto.ProvideEmail(demodata.Email)
        
    })
})