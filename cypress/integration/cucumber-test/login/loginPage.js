const URL = "http://zero.webappsecurity.com/login.html";
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'Sign in'
const ERROR_MESSAGE = '.alert-error'

class LoginPage{
    static VisitLoginPage(){
        cy.visit(URL)
    }
    static fillUsername(username){
        cy.get(USERNAME_INPUT).type(username)
    }
    static fillPassword(password){
        cy.get(PASSWORD_INPUT).type(password)
    }
    static submit(){
        cy.contains(SUBMIT_BUTTON).click()
    }

    static shouldShowErrorMessage(){
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong')
    }
}
export default LoginPage