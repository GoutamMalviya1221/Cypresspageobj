describe('table2', () => {
    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.xpath('(//table)[1]/tbody/tr[3]/td[4]').should('include.text','$100.00');
        
    });
    it('test2', () => {
        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.xpath('(//table)[2]/tbody/tr[4]/td[2]').should('include.text','Tim');
        
        
    });
});