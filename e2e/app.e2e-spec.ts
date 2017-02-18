import { AssessMeClientPage } from './app.po';
import {element, by, browser} from "protractor";

/*describe('assess-me-client App', function() {
  let page: AssessMeClientPage;

  beforeEach(() => {
    page = new AssessMeClientPage();
  });

  it('should display message saying landing works!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('landing works!');
  });
});*/


describe('Accessing Sign in page', function() {
  describe('When clicking on Sign in button', function() {
    it('Should navigate to Login page', function () {
      browser.get('https://yellow-bat.github.io/assess-me-client/');


      var signInButton = element(by.css("a[routerLink='/login']"));

      signInButton.click();
      browser.waitForAngular();

      var header = element(by.css("h1"));
      var loginField = element(by.css("input#login"));

      expect(header.isPresent);
      expect(loginField.isPresent);

    });
  });
});

describe('Accessing Sign in page', function() {
  describe('When entering Login And Password', function() {
    it('Should navigate to Main', function () {
      browser.get('https://yellow-bat.github.io/assess-me-client/login');

      var loginField = element(by.css("input#login"));
      var passwordField = element(by.css("input#password"));
      var loginButton = element(by.css("input.button"));

      loginField.sendKeys("admin");
      passwordField.sendKeys("password");
      loginButton.click();
      browser.waitForAngular();

      var text = element(by.css("div.page-content"));

      expect(text.getText()).toMatch('landing works!');

    });
  });
});


