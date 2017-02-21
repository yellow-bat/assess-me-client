import {HomePage} from "../pages/homePage";

describe('Accessing Home page',() => {
  let homePage = new HomePage();



  describe('When visiting Home Page', () => {
    beforeAll(() => {
      homePage.navigateToHome();
    });

    it('Should contain sign In button', () => {
      expect(homePage.signInButton.isPresent());
    });

    it('Should contain register button', () => {
      expect(homePage.registerButton.isPresent);
    });

    it('Should contain Logo', () => {
      expect(homePage.logo.isPresent());
    });

    it('Should contain Welcome Text', () =>  {

      expect(homePage.getWelcomeText()).toMatch('landing works!');
    });
  });
});


