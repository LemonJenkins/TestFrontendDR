import { TestProdjectPage } from './app.po';

describe('test-prodject App', function() {
  let page: TestProdjectPage;

  beforeEach(() => {
    page = new TestProdjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
