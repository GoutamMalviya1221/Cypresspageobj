describe('Evaluation', () => {
    it('test1', () => {
        // verify the URL 
        cy.visit('https://automationteststore.com');
        //Clicking on "Apparel & Accessories" and select "T-shirts".
        cy.get('#categorymenu > nav > ul > li:nth-child(2) > a').click();
        //Clicking on the third white shirt.
        cy.get('#maincontainer > div > div > div > div > ul > li:nth-child(2) > div > a').click();
        //
        cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > div.pricetag.jumbotron > a > i').click();
        cy.get('#option350 > option:nth-child(2)').click;
        
        cy.get('#product > fieldset > div:nth-child(6) > ul > li > a').click();
        cy.xpath('//*[@id="cart_checkout1"]').click();
        cy.xpath('//*[@id="accountFrm_accountguest"]').click();
        // Click on Continue Button
        cy.contains('Continue').click();
        // give 1st name
        cy.xpath('//*[@id="guestFrm_firstname"]').type('Goutam');
        //give 2nd name
        cy.xpath('//*[@id="guestFrm_lastname"]').type('Malviya');
        // give email id
        cy.xpath('//*[@id="guestFrm_email"]').type('gmgurjar1221@gmail.com');
        // give address
        cy.xpath('//*[@id="guestFrm_address_1"]').type('Indore,mp');
        // give city name 
        cy.xpath('//*[@id="guestFrm_city"]').type('indore');
        // Select zone
        cy.xpath('//*[@id="guestFrm_zone_id"]').select('Angus');
        // put your Zip/Code 
        cy.xpath('//*[@id="guestFrm_postcode"]').type('450551');
        //click on continue
        cy.contains('Continue').click();
        //click on confirm order
        cy.contains('Confirm Order').click();
        //Succesfull Order
        cy.title().should('include','YOUR ORDER HAS BEEN PROCESSED!');


    });
   
    
});