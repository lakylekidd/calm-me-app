import { CalmMeAppPage } from './app.po';

describe('calm-me-app App', function() {
  let page: CalmMeAppPage;

  beforeEach(() => {
    page = new CalmMeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
