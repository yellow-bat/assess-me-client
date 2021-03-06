import {browser} from "protractor";
import {LoginPage} from "../pages/loginPage";
import {HomePage} from "../pages/homePage";
import Const from "../const";

describe('Accessing Login page', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  describe('When visiting Login Page', () => {

    beforeAll(() => {
      loginPage.navigateTo();
    });

    it('Header should be visible', () => {
      expect(loginPage.getHeaderText()).toMatch("Sign in to Assess");
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
      expect(browser.getCurrentUrl()).toMatch(Const.baseUrl);
    });

    it('Welcome text should be visible', () => {
      expect(homePage.getWelcomeText()).toMatch('landing works!');
    });
  });

  describe('Authentication using invalid credentials', () => {
    beforeAll(() => {
      loginPage.navigateTo();
    });

    it('When I enter invalid Username', () => {
      loginPage.enterUserName("test");
    });

    it('When I enter invalid password', () => {
      loginPage.enterPassword('test');
    });

    it('When I click Login button', () => {
      loginPage.loginButton.click();
      browser.waitForAngular();
    });

    it('Error message should be displayed', () => {
      expect(loginPage.errorMessage.isDisplayed());
      expect(loginPage.getErrorText()).toMatch("Invalid username or password.");
    });
  });
});

