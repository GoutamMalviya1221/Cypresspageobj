describe('Dropdown tests', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        
    });

    it('select by text', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3');

        
    });
    it('select by index', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select(2).should('have.value','option2');


        
    });
});