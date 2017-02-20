import { browser, element, by } from 'protractor';

export class LoginPage {
  loginField = element(by.css("input#login"));
  passwordField = element(by.css("input#password"));
  loginButton = element(by.css("input.button"));
  header = element(by.css("h1"));

  navigateTo() {
    return browser.get('assess-me-client/login');
  }
};
