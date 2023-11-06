const { HomePage } = require("../pages/home.page");
const { faker } = require("@faker-js/faker");
const userCredentials = require('../data/testdata.json');
const { EditorPage } = require("../pages/editor.page");
const { ArticlePage } = require("../pages/article.page");
const { ProfilePage } = require("../pages/profile.page");

const homePage = new HomePage();
const profilePage = new ProfilePage();
const editorPage = new EditorPage();
const articlePage = new ArticlePage();
const randomText = faker.word.words(1);

describe('articles features', () => {
    beforeEach('sign in', () => {
      cy.login(userCredentials.email, userCredentials.password);
      cy.visit('/@MaksymLQi');
    });
  
    it('publish new article', () => {
      homePage.getNewArticleBtn().click();
      editorPage.publishArticle(randomText, randomText, randomText);
      articlePage.getTitle().should('be.visible').and('contain', randomText);
      articlePage.getBody().should('be.visible').and('contain', randomText);
      articlePage.getEditBtn().should('be.visible');
      articlePage.getDeleteBtn().should('be.visible');
    });

    it('edit article', () => {
      const newArticle = faker.word.words(2);
      profilePage.clickArticleLink();
      articlePage.clickEditBtn();
      editorPage.getTitle().clear();
      editorPage.getTitle().type(newArticle);
      editorPage.clickEditBtn();
      articlePage.getTitle().should('be.visible').and('have.text', newArticle);
    })

    it('delete article', () => {
      profilePage.clickArticleLink();
      articlePage.clickDeleteBtn();
      homePage.getProfileBtn().click();
      profilePage.getArticlePreview().should('be.visible').and('contain', 'No articles are here... yet.');
    })
  });