import {element, by, browser} from "protractor";
import {LoginPage} from "../pages/loginPage";
import {HomePage} from "../pages/homePage";

describe('Accessing Login page', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  describe('When visiting Login Page', () => {

    beforeAll(() => {
      loginPage.navigateTo();
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
    beforeAll(() => {
      loginPage.navigateTo();
    });

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
    });

    it('Welcome text should be visible', () => {
      expect(homePage.getWelcomeText()).toMatch('landing works!');
    });
  });
});

