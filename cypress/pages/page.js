exports.Page = class Page {

    openUrl(url){
        cy.visit(null ? '/' : url);
    }

    getElement(element){
        return cy.get(element);
    }

    clickElement(element){
        this.getElement(element).click();
    }
}