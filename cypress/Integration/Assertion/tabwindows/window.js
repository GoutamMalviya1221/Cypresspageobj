
describe('windows', () => {
    it('window test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath('//button[@id="openwindow"]').invoke('removeAttr','onclick').click();
        
        cy.origin("https://www.qaclickacademy.com",()=>{

            cy.visit("/");
            cy.contains('Access all our Courses').click();
        });

    });
});