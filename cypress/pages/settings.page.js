const { Page } = require("./page");

exports.SettingsPage = class SettingsPage extends Page {
    bioInput = '[placeholder="Short bio about you"]';
    submitBtn = '[type="submit"]'

    getBioInput() {
        return super.getElement(this.bioInput);
    }

    clickSubmitBtn() {
        super.clickElement(this.submitBtn);
    }
}