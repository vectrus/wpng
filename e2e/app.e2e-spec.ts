import { WpngPage } from './app.po';

describe('wpng App', () => {
  let page: WpngPage;

  beforeEach(() => {
    page = new WpngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
