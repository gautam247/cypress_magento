Feature: HomePage Visibility

  Background: 
    Given navigate to Dashboard Page

  Scenario: Verify the visibility of the Upside Header
    Then validate visibility of the following labels in "Header"
      | label                 |
      | Support This Project  |
      | Sign In               |
      | Create an Account     |

  Scenario: Verify the visibility of Section Items
    Then validate visibility of the following labels in "Section Item"
      | label        |
      | What's New   |
      | Women        |
      | Men          |
      | Gear         |
      | Training     |
      | Sale         |
