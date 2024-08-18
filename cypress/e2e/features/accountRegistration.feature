Feature: Account Registration Validation

@TC14
  Scenario: Verify error message when passwords do not match
    Given navigate to dashboard Page
    When click on the 'Create an Account' option
    And enter the personal details from the fixture file
    And enter the sign-in details from the fixture file
    And submit the registration form
    Then validate error message "Please enter the same value again" indicating passwords do not match