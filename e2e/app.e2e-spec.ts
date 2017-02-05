import { InspirationsPage } from './app.po';

describe('inspirations App', function() {
  let page: InspirationsPage;

  beforeEach(() => {
    page = new InspirationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
