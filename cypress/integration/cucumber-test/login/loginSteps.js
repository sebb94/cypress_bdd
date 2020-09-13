import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'


Given('I open login page', () => {
    LoginPage.VisitLoginPage()
});

When('I submit login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.submit()
});

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
});