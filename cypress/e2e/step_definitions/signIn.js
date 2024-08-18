import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import accountRegistrationPage from '../../pages/accountRegistrationPage';
import { SignInPage } from '../../pages/sign_InPage';

const signInPage = new SignInPage();


let homePageUrl= Cypress.env('baseUrl')
let randomEmail, personalInformation

Given('user navigate homepage', () => {
  cy.visit(homePageUrl);
});

When('user clicks on the {string} option in the header', (label) => {
  accountRegistrationPage.clickHeaderLabel(label);
});

When('user clicks on the {string} option', (label) => {
  accountRegistrationPage.elements.clickButtonElement('Create an Account').click()
});

When('user enters valid personal information', () => {
  cy.fixture('accountDetails').then((account) => {
    personalInformation= account.validInformation
    const randomNumber = Math.floor(Math.random() * 10000)
    randomEmail = `${personalInformation.firstName.toLowerCase()}.${personalInformation.lastName.toLowerCase()}${randomNumber}@example.com`;
    accountRegistrationPage.enterPersonalDetails(personalInformation.firstName, personalInformation.lastName, randomEmail)
    accountRegistrationPage.enterSignInDetails(personalInformation.password, personalInformation.confirmPassword)
  })
})

When('user submits the registration form', () => {
  accountRegistrationPage.elements.clickButtonElement('Create an Account').click()
});

Then('validate Welcome message in header tab', () => {
  let welcomeMessage= `Welcome, ${personalInformation.firstName} ${personalInformation.lastName}!`
  signInPage.verifyWelcomeMessage(welcomeMessage)
});

When('user logs out from the account', () => {
  cy.intercept('GET', '**/template/messages.html').as('apiWait')
  cy.signOut();
  cy.wait('@apiWait')
});

When('user logs back in with registered details', () => {
  signInPage.loginWithCredentials(randomEmail, personalInformation.password)
});

Then('user should see the message {string} in the main content', (expectedMessage) => {
    signInPage.mainContentMessage().should('contain.text', expectedMessage)
})
