import { AssessMeClientPage } from '../app.po';
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

describe('Accessing Home page', function() {

  beforeEach(function () {
    browser.get('https://yellow-bat.github.io/assess-me-client/');

  });
  describe('When clicking on Sign in button', function() {
    it('Should navigate to Login page', function () {


      var signInButton = element(by.css("a[routerLink='/login']"));

      signInButton.click();
      browser.waitForAngular();

      expect(browser.getCurrentUrl()).toContain('/login');

    });

    it('Should contain a Header', function () {
      var header = element(by.css("h1"));
      expect(header.isPresent);

    });
    it('Should contain login and password field', function () {
      var loginField = element(by.css("input#login"));
      expect(loginField.isPresent);

    });
  });

});



