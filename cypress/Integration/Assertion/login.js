///<reference types="cypress" />

describe('OrangeHRM Suite',() => {
    it('Login Test1',() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Username
        cy.get("input[name='username']").type('Admin');
        //password
        cy.get("input[name='password']").type('admin123');
        //login
        cy.get("button.oxd-button").click();

    });
    it('Facebook Login ',() => {

        cy.visit('https://www.facebook.com/');

        cy.get("#email").type('7909431009');
        cy.get("#pass").type('Goutam1221');
        cy.get("#loginbutton").click()

    });
    it.only('using xpath test', () => {

        cy.visit('https://the-internet.herokuapp.com/login');

        cy.xpath('//input[@id="username"]').type('Goutam123');
        cy.xpath('//input[@id="password"]').type('goutam');
        cy.xpath('//button[@class="radius"]').click();



    });
    it.only('using xpath test', () =>{
        cy.visit('https://www.ebay.com/');

        cy.xpath('//a[text()=" Daily Deals"]').click();
        cy.xpath('//a[text()="Help & Contact"]').click();




});
});
