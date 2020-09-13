import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage';
import LoginPage from './feedbackPage'


Given('I open login page', () => {
    FeedbackPage.VisitFeedbackPage()
});

When('I go to feedback tab', () => {
    FeedbackPage.goToFeedbackTab()
});

When('I fill name with {string}', (name) => {
    FeedbackPage.fillName(name)
});

When('I fill email with {string}', (email) => {
    FeedbackPage.fillEmail(email)
});

When('I fill subject with {string}', (subject) => {
    FeedbackPage.fillSubject(subject)
});

When('I fill message with {string}', (message) => {
    FeedbackPage.fillMessage(message)
});


When('I submit feedback', () => {
     FeedbackPage.submit()
});

Then('I should see thank you message', () => {
    FeedbackPage.shouldShowThankYouMessage()
});

