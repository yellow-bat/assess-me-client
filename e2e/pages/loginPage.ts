import { browser, element, by } from 'protractor';

export class LoginPage {

  //Elements
  loginField = element(by.css("input#login"));
  passwordField = element(by.css("input#password"));
  loginButton = element(by.css("input.button"));
  header = element(by.css("h1"));


  //Methods
  navigateToLogin() {
    return browser.get('assess-me-client/login');
  }

  enterPassword(name) {
      return this.passwordField.sendKeys(name);
  }

  enterUserName(name) {
    return this.loginField.sendKeys(name);
  }

};
