const { Page } = require("./page");

exports.HomePage = class HomePage extends Page {

    signinBtn = '[href="#/login"]';
    newArticleBtn = '[href="#/editor/"]';
    settingsBtn = '[href="#/settings"]';
    profileBtn = '.user-pic';
    settingsBtn = '.ion-gear-a';
    globalFeed = '[ng-click="$ctrl.changeList({ type: \'all\' })"]';
    likeBtn = '.ion-heart';
    likesNumber = '[class="ng-binding ng-scope"]';
    userLink = '[class="author ng-binding"]';
    followedUserArticles = '[class="article-meta"]';
    yourFeed = '[class="article-preview"]';

    clickSigninBtn(){
        super.clickElement(this.signinBtn);
    }

    clickSettingsBtn(){
        super.clickElement(this.settingsBtn);
    }

    clickProfileBtn(){
        super.clickElement(this.profileBtn);
    }

    getNewArticleBtn(){
        return super.getElement(this.newArticleBtn);
    }

    getSettingsBtn(){
        return super.getElement(this.settingsBtn);
    }

    getProfileBtn(){
        return super.getElement(this.profileBtn);
    }

    clickGlobalFeed(){
        super.clickElement(this.globalFeed);
    }

    getLikeBtn(){
        return super.getElement(this.likeBtn);
    }

    getLikesNumber(){
        return super.getElement(this.likesNumber);
    }

    getUserLink(){
        return super.getElement(this.userLink);
    }

    getFollowedUserArticles(){
        return super.getElement(this.followedUserArticles);
    }

    clickLikeBtn(){
        this.getLikeBtn().should('be.visible').then($element => {
            $element.get(0).click();
        });
    }

    clickUserLink(){
        this.getUserLink().should('be.visible').then($element => {
            $element.get(0).click();
        })
    }

    getYourFeed(){
        return super.getElement(this.yourFeed);
    }
}