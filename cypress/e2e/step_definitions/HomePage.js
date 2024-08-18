import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

const homePage = new HomePage();
let homePageUrl= Cypress.env('baseUrl')

Given('navigate to Dashboard Page', () => {
  cy.visit(homePageUrl);
});

Then('validate visibility of the following labels in {string}', (sectionType, dataTable) => {
  const labels = dataTable.rawTable.slice(1).map(row => row[0]);

  switch (sectionType.toLowerCase()) {
    case 'header':
      labels.forEach(label => {
        homePage.verifyHeaderLabelVisibility(label);
      });
      break;

    case 'section item':
      labels.forEach(label => {
        homePage.verifySectionItemVisibility(label);
      });
      break;

    default:
      throw new Error(`Unknown section type: ${sectionType}`);
  }
});
