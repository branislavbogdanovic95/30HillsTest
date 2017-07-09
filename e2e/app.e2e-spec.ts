import { Test30hillsPage } from './app.po';

describe('test30hills App', () => {
  let page: Test30hillsPage;

  beforeEach(() => {
    page = new Test30hillsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
