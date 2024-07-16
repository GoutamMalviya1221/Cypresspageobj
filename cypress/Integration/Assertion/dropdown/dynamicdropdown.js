describe('Dynamic Dropdown', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.ui-autocomplete-input').type('in');

        cy.get('.ui-menu-item').each(($option)=> {
            
            if ($option.text()=='Finland') {
                cy.wrap($option).click();
                
            }

        });


    });
});