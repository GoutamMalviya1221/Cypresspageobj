class Login_po{

EnterURl(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}

Login(){

    //Username
    cy.get("input[name='username']").type('Admin');
    //Password
    cy.get("input[name='password']").type('admin123');
    //Login
    cy.get("button.oxd-button").click();
}

Clickonforgotpassword(){

    cy.get('.orangehrm-login-forgot-header').click();


}

}
export default Login_po;