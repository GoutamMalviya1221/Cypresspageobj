describe('iframes', () => {
    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
        
        //locator for iframe
        cy.frameLoaded('[class="no-js"]');

        //to interact with elements inside the frame use iframe().
        cy.iframe().contains('Your content goes here.');
       //cy.get('div').click(); 
    });
});