import { browser, element, by } from 'protractor';

export class HomePage {
  signInButton = element(by.css("a[routerLink='/login']"));
  registerButton = element(by.css("a[routerLink='/register']"));
  text = element(by.css("div.page-content"));
  logo = element(by.css("a.logo"));

  navigateTo() {
    return browser.get('assess-me-client/');
  }

};
