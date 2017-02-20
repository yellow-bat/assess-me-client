import { browser, element, by } from 'protractor';

export class HomePage {
  signInButton = element(by.css("a[routerLink='/login']"));
  header = element(by.css("h1"));
  text = element(by.css("div.page-content"));
};
