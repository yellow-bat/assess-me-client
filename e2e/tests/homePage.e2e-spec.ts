import { AssessMeClientPage } from '../pages/app.po';
import {element, by, browser} from "protractor";

let HomePage = require('../pages/homePage');

describe('Accessing Home page', function() {
  let homePage = new HomePage();

  beforeEach(function () {
    browser.get('https://yellow-bat.github.io/assess-me-client/');

  });
  describe('When clicking on Sign in button', function() {
    it('Should navigate to Login page', function () {

      homePage.signInButton.click();
      browser.waitForAngular();

      expect(browser.getCurrentUrl()).toContain('/login');

    });

    it('Should contain a Header', function () {
      expect(homePage.header.isPresent);

    });

    it('Should contain login and password field', function () {
      let loginField = element(by.css("input#login"));
      expect(loginField.isPresent);

    });
  });

});



