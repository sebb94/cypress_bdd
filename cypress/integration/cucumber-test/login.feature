Feature: title
    As a valid user I want to login

    Scenario: Valid login
        Given I open login page
        When I fill username with "username"
        And I fill password with "password"
        And I submit login
        Then I should see homepage
    
    

    

