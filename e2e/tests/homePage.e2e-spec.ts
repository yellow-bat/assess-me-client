import {HomePage} from "../pages/homePage";

describe('Accessing Home page', function() {
  let homePage = new HomePage();

  describe('When visiting Home Page', function() {
    homePage.navigateToHome();


    it('Should contain sign In button', function () {
      expect(homePage.signInButton.isPresent());
    });

    it('Should contain register button', function () {
      expect(homePage.registerButton.isPresent);
    });

    it('Should contain Logo', function () {
      expect(homePage.logo.isPresent());
    });

    it('Should contain Welcome Text', function () {
      expect(homePage.getWelcomeText()).toMatch('landing works!');
    });
  });
});


