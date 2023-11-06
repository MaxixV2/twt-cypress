const { Page } = require("./page");

exports.ArticlePage = class ArticlePage extends Page {
    title = '[ng-bind="::$ctrl.article.title"]';
    body = '[ng-bind-html="::$ctrl.article.body"]';
    editBtn = '.ion-edit';
    deleteBtn = '.ion-trash-a';

    getTitle(){
        return super.getElement(this.title);
    }

    getBody(){
        return super.getElement(this.body);
    }

    getEditBtn(){
        return super.getElement(this.editBtn);
    }

    clickEditBtn(){
        this.getEditBtn().should('be.visible').then($element => {
            $element.get(0).click();
        });
    }

    getDeleteBtn(){
        return super.getElement(this.deleteBtn);
    }

    clickDeleteBtn(){
        this.getDeleteBtn().should('be.visible').then($element => {
            $element.get(0).click();
        });
    }
}