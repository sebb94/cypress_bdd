Feature: Feedback
    As a user I want to send feedback

    @focus
    Scenario: Valid feedback send
        Given I open login page
        When I see "Zero" in the title
        And I see "webappsecurity." in the url
        And I go to feedback tab
        And I want to wait 1000 milliseconds
        And I fill name with "Sebastian"
        And I fill email with "sebastian@gmail.com"
        And I fill subject with "Subject"
        And I fill message with "messagee!!!!"
        And I submit feedback
        Then I should see thank you message
    
    

    

