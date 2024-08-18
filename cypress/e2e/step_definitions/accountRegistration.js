import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import accountRegistrationPage from '../../pages/accountRegistrationPage';
let homePageUrl= Cypress.env('baseUrl')

Given('navigate to dashboard Page', () => {
  cy.visit(homePageUrl);
});

When('click on the {string} option', (label) => {
    accountRegistrationPage.clickHeaderLabel(label);
});

When('enter the personal details from the fixture file', () => {
    cy.fixture('accountDetails').then((account) => {
      const { firstName, lastName, email } = account.invalidPassword;
      accountRegistrationPage.enterPersonalDetails(firstName, lastName, email);
    });
  });
  
When('enter the sign-in details from the fixture file', () => {
    cy.fixture('accountDetails').then((account) => {
      const { password, confirmPassword } = account.invalidPassword;
      accountRegistrationPage.enterSignInDetails(password, confirmPassword);
    });
});

When('submit the registration form', () => {
    accountRegistrationPage.elements.clickButtonElement('Create an Account').click()
});

Then('validate error message {string} indicating passwords do not match', (errorMessage) => {
    accountRegistrationPage.getPasswordConfirmationError().should('contain.text', errorMessage);
});
