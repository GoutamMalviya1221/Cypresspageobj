describe('iframes', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        //locator for iframe
        cy.frameLoaded('#courses-iframe');

        //to interact with elements inside the frame use iframe().
        cy.iframe().contains('Blog').click();
        
    });
});