import { browser, element, by } from 'protractor';

export class HomePage {

  //Elements
  welcomeText = element(by.css("div.page-content.container"));


  //Methods
  navigateTo() {
    return browser.get('assess-me-client/');
  }

  getWelcomeText() {
    return this.welcomeText.getText();
  }
}
