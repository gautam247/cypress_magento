Cypress.Commands.add('typeText', (id, text) => {
    cy.get(`#${id}`).type(text);
  });
  
  Cypress.Commands.add('signOut',() =>{
    cy.get('.header.links li .customer-name button[type="button"]').eq(0).click({force:true})
    cy.get('.customer-menu .header.links li').contains('Sign Out').click();
})
  