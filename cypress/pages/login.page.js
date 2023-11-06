const { Page } = require("./page");

exports.LoginPage = class LoginPage extends Page {

    emailInput = '[type="email"]';
    passwordInput = '[type="password"]';
    signinBtn = '[type="submit"]';
    errorMsg = '[ng-repeat="error in errors"]';

    setEmail(email) {
        super.getElement(this.emailInput).type(email);
    }

    setPassword(pass) {
        super.getElement(this.passwordInput).type(pass);
    }

    signIn(email, pass) {
        this.setEmail(email);
        this.setPassword(pass);
        super.clickElement(this.signinBtn);
    }

    getErrorMsg() {
        return super.getElement(this.errorMsg);
    }

    login = (email, password) => {
        super.openUrl('/login');
        cy.setCookie('name', 'value');
        cy.reload();
        this.setEmail(email);
        this.setPassword(password);
        super.clickElement(this.signinBtn);
        cy.url().should('not.include', 'login');
        
    }


}