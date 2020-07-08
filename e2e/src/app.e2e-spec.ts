import { AppPage } from './app.po';
import { MainPage } from './main.po';

import { browser, logging } from 'protractor';

describe('DashBoard App Login Flow', () => {
  let page: AppPage;
  let mainPage: MainPage;

  beforeEach(() => {
    page = new AppPage();
    mainPage = new MainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Application Started');
  });

  it("should able to enter detail and click btn", ()=>{
    page.setUsername("admin1234");

    page.setPassword("12345678");

    page.clickLoginBtn();
  });

  it('After succesful login Dasboard page should open', () => {
    expect(mainPage.getDashboardText()).toEqual('Dashboard Page');
  });
  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});


describe('DashBoard App Login Flow (Nagative)', () => {
  let page: AppPage;
  let mainPage: MainPage;

  beforeEach(() => {
    page = new AppPage();
    mainPage = new MainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Application Started');
  });

  it("should able to enter detail and click btn", ()=>{
    page.setUsername("admin124");

    page.setPassword("1234578");

    page.clickLoginBtn();
  });

  it('After invalid login Dasboard page should not open', () => {
    var alertDialog = browser.switchTo().alert();

  	expect(alertDialog.getText()).toEqual('Credentials Invalid !!');
  });
  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
