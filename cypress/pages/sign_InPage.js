export class SignInPage {
    clickCreateAccount() {
      cy.get('.new-customers a').contains('Create an Account').click();
    }
  
    loginWithCredentials(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('#send2').click();
    }

    verifyWelcomeMessage(expectedMessage) {
      cy.get('ul li').find('.logged-in').should('contain.text', expectedMessage);
    }

    mainContentMessage(){
      return cy.get('#maincontent .messages')
    }
  }
  