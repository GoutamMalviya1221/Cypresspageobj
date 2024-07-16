describe('Nonfiction', () => {
    it('test1', () => {
        cy.visit('https://books.toscrape.com/ ');
        cy.xpath('//*[@id="default"]/div/div/div/aside/div[2]/ul/li/ul/li[12]/a').click();
        cy.wait(2000);
        
    });
    it('Add to cart', () => {
        cy.visit('https://books.toscrape.com/ ');
        cy.xpath('//*[@id="default"]/div/div/div/div/section/div[2]/ol/li[1]/article/div[2]/form/button').click()
;        
    });
});