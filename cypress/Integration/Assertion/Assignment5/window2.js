describe('window', () => {
    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.xpath('//a[.="Click Here"]').invoke('removeAttr','target').click();
        
    });
});