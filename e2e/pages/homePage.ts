import { browser, element, by } from 'protractor';

export class HomePage {

  //Elements
  signInButton = element(by.css("a[routerLink='/login']"));
  registerButton = element(by.css("a[routerLink='/register']"));
  welcomeText = element(by.css("div.page-content.container"));
  logo = element(by.css("a.logo"));

  //Methods
  navigateTo() {
    return browser.get('assess-me-client/');
  }

  getWelcomeText() {
    return this.welcomeText.getText();
  }
}
