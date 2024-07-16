describe('hello world', () => {
    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        cy.xpath("//*[.='Start']").click();
        cy.wait(2000);
        cy.contains('Hello World!').should('be.visible');
        
    });
});