import {element, by, browser} from "protractor";
import {LoginPage} from "../pages/loginPage";
import {HomePage} from "../pages/homePage";

describe('Accessing Login page', () => {
  let loginPage = new LoginPage();
  let homePage = new HomePage();

  describe('When visiting Login Page', () => {

    beforeAll(() => {
      loginPage.navigateToLogin();
    });

    it('Header should be visible', () => {
      expect(loginPage.header.getText()).toMatch("Sign in to Assess");
      });

    it('Login field should be visible', () => {
      loginPage.loginField.isPresent();
      });

    it('Password field should be visible', () => {
      loginPage.passwordField.isPresent();
      });

    it('Login Button should be visible', () => {
      loginPage.loginButton.isPresent();
      });
  });

  describe('Authentication using valid credentials', () => {
    loginPage.navigateToLogin();
    it('When I enter Username', () => {
      loginPage.enterUserName("admin");
    });

    it('When I enter password', () => {
      loginPage.enterPassword('password');
    });

    it('When I click Login button', () => {

      loginPage.loginButton.click();
      browser.waitForAngular();
    });

    it('I should be on Home page', () => {

      expect(browser.getCurrentUrl()).toMatch("https://yellow-bat.github.io/assess-me-client/");
      expect(homePage.getWelcomeText()).toMatch('landing works!');

    });
  });
});

