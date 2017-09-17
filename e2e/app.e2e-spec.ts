import { AppPage } from './app.po';

<<<<<<< HEAD
describe('node-demo App', () => {
=======
describe('mean-final App', () => {
>>>>>>> eccd8ab0c2d8c7717bcd7519b25750b7b1dccd28
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
