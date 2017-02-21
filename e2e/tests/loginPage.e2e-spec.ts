import {element, by, browser} from "protractor";
import {LoginPage} from "../pages/loginPage";
import {HomePage} from "../pages/homePage";

describe('Accessing Login page', function() {
  let loginPage = new LoginPage();
  let homePage = new HomePage();

  describe('When visiting Login Page', function () {
    loginPage.navigateToLogin();
    it('Header should be visible', function () {
      expect(loginPage.header.getText()).toMatch("Sign in to Assess");
      });

    it('Login field should be visible', function () {
      loginPage.loginField.isPresent();
      });

    it('Password field should be visible', function () {
      loginPage.passwordField.isPresent();
      });

    it('Login Button should be visible', function () {
      loginPage.loginButton.isPresent();
      });
  });

  describe('Authentication using valid credentials', function () {
    loginPage.navigateToLogin();
    it('When I enter Username', function () {
      loginPage.enterUserName("admin");
    });

    it('When I enter password', function () {
      loginPage.enterPassword('password');
    });

    it('When I click Login button', function () {

      loginPage.loginButton.click();
      browser.waitForAngular();
    });

    it('I should be on Home page', function () {

      expect(browser.getCurrentUrl()).toMatch("https://yellow-bat.github.io/assess-me-client/");
      expect(homePage.getWelcomeText()).toMatch('landing works!');

    });
  });
});

