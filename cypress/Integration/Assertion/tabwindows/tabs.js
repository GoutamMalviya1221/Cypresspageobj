

describe('windows and tabs', () => {
    it('tab test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath("//*[.='Open Tab']").invoke('removeAttr','target').click();
        
        cy.origin("https://www.qaclickacademy.com/",()=>{

            cy.contains('Access all our Courses').click();
        });

    });
});