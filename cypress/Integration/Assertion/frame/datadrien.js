// Hooks in Cypress
// before block will be executed before a describe block


before(() => {
    
    cy.fixture('example').then((data)=>{

        globalThis.data= data; // importing data from example.json

    });
});
    describe('data driven testing', () => {
        it('orange hrm login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Username
        cy.get("input[name='username']").type(data.username);
        //password
        cy.get("input[name='password']").type(data.password);
        //login
        cy.get("button.oxd-button").click();
            
        });
    });
