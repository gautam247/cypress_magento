class accountRegistrationPage {
    elements = {
      headerLinksElement: () => cy.get('.header.links li'),
      confirmPasswordInput: () => cy.get('#password-confirmation'),
      clickButtonElement: (label) => cy.get(`button[title="${label}"]`),
      errorMessage: () => cy.get('.mage-error#password-confirmation-error'),
    }
  
    clickHeaderLabel(label) {
      this.elements.headerLinksElement().contains(label).click();
    }
  
    typeText(id, text) {
        cy.get(`#${id}`).type(text);
      }
    
    enterPersonalDetails(firstName, lastName, email) {
        this.typeText('firstname', firstName);
        this.typeText('lastname', lastName);
        this.typeText('email_address', email);
    }
    
    enterSignInDetails(password, confirmPassword) {
        this.typeText('password', password);
        this.typeText('password-confirmation', confirmPassword);
    }
   
    getPasswordConfirmationError() {
      return this.elements.errorMessage();
    }

  }
  
  export default new accountRegistrationPage();
  