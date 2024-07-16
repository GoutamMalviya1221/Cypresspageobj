import Login_po from "../../../support/pageobject/orangehrm/loginpage";
import Link_po from "../../../support/pageobject/orangehrm/linkpage";
import Logout_po from "../../../support/pageobject/orangehrm/logoutpage";

describe('', () => {

    const login_po = new Login_po();
    const link_po = new Link_po();
    const logout_po = new Logout_po();

    it('test1', () => {

        //Login
        login_po.EnterURl();
        login_po.Login();
        cy.wait(5000);

        //Clicking on admin link
        link_po.linkclick('Admin');
        cy.wait(5000);

        //Logging Out
        logout_po.logout();
        cy.wait(5000);

        
    });
});