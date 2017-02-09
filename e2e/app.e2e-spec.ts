import { AssessMeClientPage } from './app.po';

describe('assess-me-client App', function() {
  let page: AssessMeClientPage;

  beforeEach(() => {
    page = new AssessMeClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
