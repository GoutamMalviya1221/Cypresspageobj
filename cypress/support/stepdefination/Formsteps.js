import { Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('user opens the Simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form');


});

When('user enters firstname , lastname , email , message',()=>{
    cy.get('#firstName').type('Goutam');
    cy.get('#lastName').type('Malviya');
    cy.get('#email').type('gmgurjar1221@gmail.com');
    cy.get('#number').type('7909431009');
    cy.xpath('//textarea').type('hello')

});

And('clicks on submit',()=>{
    cy.xpath('//input[@value="submit"]').click()

});

Then('An alert saying successful message has to be displayed.',()=>{
    cy.on('window:confirm', (alertmsg) => {
        expect(alertmsg).to.equal('Thank You for reaching out to us, Goutam Malviya');
        return true;
});
});