import { browser, element, by } from 'protractor';

export class RegistrationPage {

  //Elements
  header = element(by.css("div.register-form h1"));
  emailField = element(by.css("input#email"));
  loginField = element(by.css("input#Login"));
  passwordField = element(by.css("input#password"));
  positionField = element(by.css("input#position"));


  //Methods
  navigateTo() {
    return browser.get('assess-me-client/register');
  }

  enterPassword(name) {
    return this.passwordField.sendKeys(name);
  }

}
