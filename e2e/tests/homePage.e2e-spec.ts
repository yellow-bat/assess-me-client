import { AssessMeClientPage } from '../pages/app.po';
import {element, by, browser} from "protractor";
import {HomePage} from "../pages/homePage";

describe('Accessing Home page', function() {
  let homePage = new HomePage();

  beforeEach(function () {
    homePage.navigateTo();
  });

  describe('When visiting Home Page', function() {
    it('Should contain all necessary fields', function () {
      expect(homePage.signInButton.isPresent());
      expect(homePage.registerButton.isPresent);
      expect(homePage.logo.isPresent);
      expect(homePage.text.getText()).toEqual("landing works!");
    });
  });
});


