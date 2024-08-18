Feature: Verify login with new credentials after account creation

  Scenario: User logs in successfully after account creation
    Given user navigate homepage
    When user clicks on the "Create an Account" option in the header
    And user enters valid personal information
    And user submits the registration form
    Then user should see the message "Thank you for registering with Main Website Store" in the main content
    When user logs out from the account
    When user clicks on the "Sign In" option in the header
    And user logs back in with registered details
    Then validate Welcome message in header tab