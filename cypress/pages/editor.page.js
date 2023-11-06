const { Page } = require("./page");

exports.EditorPage = class EditorPage extends Page {
    
    title = '[ng-model="$ctrl.article.title"]';
    description = '[ng-model="$ctrl.article.description"]';
    body = '[ng-model="$ctrl.article.body"]';
    publishBtn = '[ng-click="$ctrl.submit()"]';

    publishArticle(articleText, descriptionText, text) {
        super.getElement(this.title).type(articleText);
        super.getElement(this.description).type(descriptionText);
        super.getElement(this.body).type(text);
        super.clickElement(this.publishBtn);
    }

    getTitle(){
        return super.getElement(this.title);
    }

    getPublishBtn(){
        return super.getElement(this.publishBtn);
    }

    clickPublishBtn(){
        super.clickElement(this.getPublishBtn());
    }

    clickEditBtn(){
        this.getPublishBtn().should('be.visible').then($element => {
            $element.get(0).click();
        })
    }
}