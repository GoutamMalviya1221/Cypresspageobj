describe('orange test', () => {
    it('test1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').then(($username)=>{

            expect($username).to.have.attr('placeholder','Username');
            cy.wrap($username).type('Admin')


        });

        cy.get('[name="password"]').then(($password)=>{

            expect($password).to.have.attr('placeholder','Password');
            cy.wrap($password).type('admin123');
        });

        cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        
        cy.contains('').wait(2000).click();

        cy.contains
    });

   
   
});