import {element, by, browser} from "protractor";
import {LoginPage} from "../pages/loginPage";
import {HomePage} from "../pages/homePage";

describe('Accessing Login page', function() {
  let loginPage = new LoginPage();
  let homePage = new HomePage();

  beforeEach(function () {
    browser.get('https://yellow-bat.github.io/assess-me-client/login');

  });

  describe('When entering Login And Password', function () {
    it('Should navigate to Main page', function () {

      loginPage.loginField.sendKeys("admin");
      loginPage.passwordField.sendKeys("password");
      loginPage.loginButton.click();
      browser.waitForAngular();

      expect(homePage.text.getText()).toMatch('landing works!');

    });
  });
});
