const { Page } = require("./page");

exports.ProfilePage = class ProfilePage extends Page {
    articleLink = '[ng-bind="$ctrl.article.title"]';
    articlePreview = '[class = "article-preview"]';
    bioLabel = '[ng-bind="::$ctrl.profile.bio"]';
    favoritesFeed = '[href="#/@MaksymLQi/favorites"]';
    likedArticle = '[ng-bind="$ctrl.article.title"]';
    likeBtn = '[class="ng-binding ng-scope"]';
    followBtn = 'follow-btn > [ng-click="$ctrl.submit()"]';
    homeBtn = '[style="display: inherit;"]>li>a[href="#/"]';

    getArticleLink(){
        return super.getElement(this.articleLink);
    }

    clickHomeBtn(){
        super.clickElement(this.homeBtn);
    }

    clickArticleLink(){
        this.getArticleLink().should('be.visible').then($element => {
            $element.get(0).click();
        });
    }

    clickFavoritesFeed(){
        super.clickElement(this.favoritesFeed);
    }

    getLikedArticle(){
        return super.getElement(this.likedArticle);
    }

    getLikeBtn(){
        return super.getElement(this.likeBtn);
    }

    clickLikeButton(){
        this.getLikeBtn().should('be.visible').then($element => {
            $element.get(0).click();
        });
    }

    getFollowBtn(){
        return super.getElement(this.followBtn);
    }

    getArticlePreview(){
        return super.getElement(this.articlePreview);
    }

    getBioLabel(){
        return super.getElement(this.bioLabel);
    }

    clickFollowBtn(){
        super.clickElement(this.followBtn);
    }
}