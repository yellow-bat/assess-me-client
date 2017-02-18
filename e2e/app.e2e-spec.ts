import { AssessMeClientPage } from './app.po';
import {element, by, browser} from "protractor";

describe('assess-me-client App', function() {
  let page: AssessMeClientPage;

  beforeEach(() => {
    page = new AssessMeClientPage();
  });

  it('should display message saying landing works!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('landing works!');
  });

  it('should click sign in button', () => {
    page.navigateTo();
    element(by.css("a[routerLink='/login']")).click();

  });


});
