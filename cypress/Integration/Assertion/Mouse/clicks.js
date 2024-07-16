describe('Mouse click', () => {
    it.skip('test1', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');

        cy.xpath('//*[.="right click me"]').rightclick();
        
        cy.xpath('//button').dblclick();
    });
    it('hover test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#mousehover').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
        
    });
    it('Mouse hover 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#mousehover').trigger('mouseover');
        cy.contains('Top').click({force:true});
        cy.url().should('include', 'top');
        
    });
});