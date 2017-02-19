import { browser, element, by } from 'protractor';

module.exports = function () {
  this.loginField = element(by.css("input#login"));
  this.passwordField = element(by.css("input#password"));
  this.loginButton = element(by.css("input.button"));

};
