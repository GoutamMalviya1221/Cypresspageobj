describe('Double Click Example', function() {  
    it('should double click on an element', function() {  
      // Visit the webpage  
      cy.visit('https://api.jquery.com/dblclick/');  
  
      // Find the element to double click  
      cy.get('//*[@class="demo code-demo"]').dblclick();  
  
      // Perform assertions or other actions after double-clicking  
    });  
  });