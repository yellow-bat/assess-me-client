import { browser, element, by } from 'protractor';

export class Toolbar {
  signInButton = element(by.css("a[routerLink='/login']"));
  registerButton = element(by.css("a[routerLink='/register']"));
  logo = element(by.css("a[routerLink='/']"));
}
