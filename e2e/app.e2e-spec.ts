import { StaticngAppPage } from './app.po';

describe('staticng-app App', () => {
  let page: StaticngAppPage;

  beforeEach(() => {
    page = new StaticngAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
