const { HomePage } = require("../pages/home.page");
const { faker } = require("@faker-js/faker");
const userCredentials = require('../data/testdata.json');
const { ProfilePage } = require("../pages/profile.page");
const { SettingsPage } = require("../pages/settings.page");

const homePage = new HomePage();
const settingsPage = new SettingsPage();
const profilePage = new ProfilePage();

describe('profile settings features', () => {
    beforeEach('sign in', () => {
        cy.login(userCredentials.email, userCredentials.password);
    });

    it('should edit profile bio', () => {
        const randomBio = faker.word.words(3);
        homePage.clickSettingsBtn();
        settingsPage.getBioInput().clear();
        settingsPage.getBioInput().type(randomBio);
        settingsPage.clickSubmitBtn();
        profilePage.getBioLabel().should('be.visible').and('contain', randomBio);
    })

});