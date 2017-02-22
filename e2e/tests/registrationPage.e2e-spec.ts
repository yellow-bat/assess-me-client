import {RegistrationPage} from "../pages/registrationPage";

describe('Accessing Registration page', () => {
  const registrationPage = new RegistrationPage();

  describe('When visiting Registration Page', () => {

    beforeAll(() => {
      registrationPage.navigateTo();
    });

    it('Header should be visible', () => {
      registrationPage.header.isDisplayed();
      expect(registrationPage.getHeaderText()).toMatch("Join Asses");
    });

    it('Email field should be visible', () => {
      registrationPage.emailField.isDisplayed();
    });

    it('Login field should be visible', () => {
      registrationPage.loginField.isDisplayed();
    });

    it('Password field should be visible', () => {
      registrationPage.passwordField.isDisplayed();
    });

    it('Position field should be visible', () => {
      registrationPage.positionField.isDisplayed();
    });

    it('Placeholder of login field is visible', () => {
      expect(registrationPage.getLoginPlaceholder()).toMatch("Login");
    });
  });
});
