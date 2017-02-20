import {element, by, browser} from "protractor";
import {LoginPage} from "../pages/loginPage";
import {HomePage} from "../pages/homePage";

describe('Accessing Login page', function() {
  let loginPage = new LoginPage();
  let homePage = new HomePage();

  beforeEach(function () {
    loginPage.navigateTo();

  });

  describe('When visiting Login Page', function () {
    it('Should contain all necessary field', function () {
      expect(loginPage.header.getText()).toMatch("Sign in to Assess");

      loginPage.loginButton.isPresent();
      loginPage.passwordField.isPresent();
      loginPage.loginButton.isPresent();

    });
  });

  describe('Authentication using valid credentials', function () {
    it('Home page should be opened', function () {
      loginPage.loginField.sendKeys("admin");
      loginPage.passwordField.sendKeys("password");
      loginPage.loginButton.click();
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toMatch("https://yellow-bat.github.io/assess-me-client/");
      expect(homePage.text.getText()).toMatch('landing works!');

    });
  });
});

