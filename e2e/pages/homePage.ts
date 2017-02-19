import { browser, element, by } from 'protractor';

module.exports = function () {
  this.signInButton = element(by.css("a[routerLink='/login']"));
  this.header = element(by.css("h1"));
  this.text = element(by.css("div.page-content"));
};
