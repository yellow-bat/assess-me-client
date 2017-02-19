import {element, by, browser} from "protractor";

describe('Accessing Login page', function() {

  beforeEach(function () {
    browser.get('https://yellow-bat.github.io/assess-me-client/login');

  });

  describe('When entering Login And Password', function () {
    it('Should navigate to Main page', function () {

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
