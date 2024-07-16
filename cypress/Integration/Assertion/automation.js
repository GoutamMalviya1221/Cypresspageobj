describe('Automation Practice', () => {
    it('test1 request', () => {

        cy.visit('https://automationteststore.com/');

        
        cy.xpath('//a[text()="Contact Us"]').click();
        cy.get('input[id="ContactUsFrm_first_name"]').type('Goutam');
        cy.get('input[id="ContactUsFrm_email"]').type('gmgurjar1221@gmail.com');
        cy.get('textarea[name="enquiry"]').type('I want to know about shoes');
        cy.get('button[title="Submit"]').click();
        cy.title().should('include','Contact Us');

        cy.xpath("//p[contains(text(),'Your enquiry has been successfully sent to the store owner!')]").should('include.text', 'Your enquiry has been successfully sent to the store owner!');




        
    });
});