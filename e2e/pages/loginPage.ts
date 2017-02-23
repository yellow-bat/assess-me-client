import { browser, element, by } from 'protractor';

export class LoginPage {

  //Elements
  loginField = element(by.css("input#login"));
  passwordField = element(by.css("input#password"));
  loginButton = element(by.css("input.button"));
  header = element(by.css("div.login-form h1"));
  errorMessage = element(by.css("div.as-error"));

  //Methods
  navigateTo() {
    return browser.get('assess-me-client/login');
  }

  enterPassword(name) {
      return this.passwordField.sendKeys(name);
  }

  enterUserName(name) {
    return this.loginField.sendKeys(name);
  }

  getHeaderText() {
    return this.header.getText();
  }

  getErrorText() {
    return this.errorMessage.getText();
  }
}
