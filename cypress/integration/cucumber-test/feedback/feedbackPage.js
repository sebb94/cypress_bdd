const URL = "http://zero.webappsecurity.com/index.html";
const FEEDBACK_TAB = "#feedback"
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = "#subject"
const MESSAGE_INPUT = "#comment"
const SUBMIT_BUTTON = 'input[name="submit"]'
const THANKYOU_MESSAGE = ".top_offset"


class FeedbackPage{
    static VisitFeedbackPage(){
        cy.visit(URL)
    }
    static goToFeedbackTab(){
        cy.get(FEEDBACK_TAB).click()
    }
    static fillName(name){
        cy.get(NAME_INPUT).type(name)
    }
    static fillEmail(email){
        cy.get(EMAIL_INPUT).type(email)
    }
    static fillSubject(subject){
        cy.get(SUBJECT_INPUT).type(subject)
    }
    static fillMessage(message){
        cy.get(MESSAGE_INPUT).type(message)
    }
    static submit(){
        cy.get(SUBMIT_BUTTON).click()
    }
    static shouldShowThankYouMessage(){
        cy.get(THANKYOU_MESSAGE).contains('Thank you for your comments')
    }
}
export default FeedbackPage