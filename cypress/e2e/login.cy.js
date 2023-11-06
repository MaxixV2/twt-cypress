const { HomePage } = require("../pages/home.page");
const { LoginPage } = require("../pages/login.page");
const { faker } = require('@faker-js/faker');
const userCredentials = require('../data/testdata.json');

const homePage = new HomePage();
const loginPage = new LoginPage();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe('login feature', () => {
  beforeEach('navigate to login page', () => {
    homePage.openUrl('/');
    homePage.clickSigninBtn();
  });

  it('login with valid credentials', () => {
    loginPage.signIn(userCredentials.email, userCredentials.password);
    homePage.getNewArticleBtn().should('be.visible');
    homePage.getSettingsBtn().should('be.visible');
    homePage.getProfileBtn().should('be.visible');
  });

  it('login with invalid email', () => {
    loginPage.signIn(randomEmail, userCredentials.password);
    loginPage.getErrorMsg().should('be.visible').and('contain', 'email or password is invalid');
  });

  it('login with invalid password', () => {
    loginPage.signIn(userCredentials.email, randomPassword);
    loginPage.getErrorMsg().should('be.visible').and('contain', 'email or password is invalid');
  })
});