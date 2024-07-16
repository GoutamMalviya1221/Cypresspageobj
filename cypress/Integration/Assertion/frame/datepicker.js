describe('Datepicker', () => {
    it('test1', () => {
        
        cy.visit('https://jqueryui.com/datepicker/');
        
        // select date 07/07/2024
        cy.iframe('[src="/resources/demos/datepicker/default.html"]');
        //cy.get('.hasDatepicker').type('07/07/2024{enter}');
        cy.iframe().contains('Date').type('07/07/2024{enter}');
    });
});