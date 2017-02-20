import { browser, element, by } from 'protractor';

export class LoginPage {
  loginField = element(by.css("input#login"));
  passwordField = element(by.css("input#password"));
  loginButton = element(by.css("input.button"));
};
