const { HomePage } = require("../pages/home.page");
const userCredentials = require('../data/testdata.json');
const { ProfilePage } = require("../pages/profile.page");

const homePage = new HomePage();
const profilePage = new ProfilePage();

describe('likes features', () => {
    beforeEach('sign in', () => {
        cy.login(userCredentials.email, userCredentials.password);
        homePage.clickGlobalFeed();
    });

    it('like and unlike article', () => {
        homePage.clickLikeBtn();
        homePage.getLikesNumber().invoke('text').then((number1) => {
            homePage.clickLikeBtn();
            homePage.getLikesNumber().invoke('text').should((number2) => {
                expect(number1).not.to.eq(number2);
            })
        })
        homePage.clickProfileBtn();
        profilePage.clickFavoritesFeed();
        profilePage.getLikedArticle().should('be.visible');
        profilePage.clickLikeButton();
        cy.reload();
        profilePage.getArticlePreview().should('be.visible').and('contain', 'No articles are here... yet.');
    })

});