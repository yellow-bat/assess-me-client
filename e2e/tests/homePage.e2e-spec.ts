import {HomePage} from "../pages/homePage";
import {LoginPage} from "../pages/loginPage";
import {Toolbar} from "../pages/common/toolbar";
import {browser} from "protractor";
import Const from "../const";

describe('Accessing Home page',() => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const toolbar = new Toolbar();

  describe('When visiting Home Page', () => {
    beforeAll(() => {
      homePage.navigateTo();
    });

    it('Should contain sign In button', () => {
      expect(toolbar.signInButton.isPresent());
    });

    it('Should contain register button', () => {
      expect(toolbar.registerButton.isPresent);
    });

    it('Should contain Logo', () => {
      expect(toolbar.logo.isPresent());
    });

    it('Should contain Welcome Text', () =>  {
      expect(homePage.getWelcomeText()).toMatch('landing works!');
    });
  });

  describe('Checking the Home button', () => {
    it('When I navigate to Login page', () => {
      loginPage.navigateTo();
    });

    it('When I click Home button', () => {
      toolbar.logo.click();
    });

    it('Should return to Home page', () => {
      expect(browser.getCurrentUrl()).toMatch(Const.baseUrl);
    });
  });
});


