describe('Alert Handling', () => {
    it('alert text1', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
      cy.get('button').contains('Click for JS Alert').click();
  
      cy.on('window:alert', (text) => {
        expect(text).to.equal('I am a JS Alert');
      });
    });
    it('alert text2', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    
        cy.get('button').contains('Click for JS Confirm').click();
    
        cy.on('window:alert', (text) => {
          expect(text).to.equal('I am a JS Confirm');
        });
      });
      it('alert text3', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    
        cy.get('button').contains('Click for JS Prompt').click();
    
        cy.on('window:alert', (text) => {
          expect(text).to.equal('I am a JS prompt');
        });
      });
      

  });