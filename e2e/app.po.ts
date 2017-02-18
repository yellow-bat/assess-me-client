import { browser, element, by } from 'protractor';

export class AssessMeClientPage {
  navigateTo() {
    return browser.get('assess-me-client/');
  }

  getParagraphText() {
    return element(by.css('div.page-content')).getText();
  }
}
