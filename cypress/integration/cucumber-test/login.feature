Feature: Login
    As a valid user I want to login
    As a invalid user I do not want to login

    Scenario: Invalid login
        Given I open login page
        When I fill username with "invalid_username"
        And I fill password with "invalid_password"
        And I submit login
        Then I should see error message

    Scenario: Valid login
        Given I open login page
        When I fill username with "username"
        And I want to wait 1000 milliseconds
        And I see "Zero" in the title
        And I see "/login" in the url
        And I fill password with "password"
        And I submit login
        Then I should see homepage
    
    

    

