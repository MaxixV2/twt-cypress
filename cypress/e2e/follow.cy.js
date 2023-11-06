const { HomePage } = require("../pages/home.page");
const userCredentials = require('../data/testdata.json');
const { ProfilePage } = require("../pages/profile.page");

const homePage = new HomePage();
const profilePage = new ProfilePage();

describe('follow features', () => {
    beforeEach('sign in', () => {
        cy.login(userCredentials.email, userCredentials.password);
    });

    it('should follow user', () => {
        homePage.clickGlobalFeed();
        homePage.clickUserLink();
        profilePage.getFollowBtn().should('be.visible').and('contain', 'Follow');
        profilePage.clickFollowBtn();
        profilePage.getFollowBtn().should('be.visible').and('contain', 'Unfollow');
        profilePage.clickHomeBtn();
        homePage.getFollowedUserArticles().should('be.visible');
    })

    it('should unfollow user', () => {
        homePage.clickUserLink();
        profilePage.getFollowBtn().should('be.visible').and('contain', 'Unfollow');
        profilePage.clickFollowBtn();
        profilePage.getFollowBtn().should('be.visible').and('contain', 'Follow');
        profilePage.clickHomeBtn();
        homePage.getYourFeed().should('be.visible').and('contain', 'No articles are here... yet.');
    })

});