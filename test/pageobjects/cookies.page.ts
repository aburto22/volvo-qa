import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get settingsButton() {
    return $("#onetrust-pc-btn-handler");
  }

  public get rejectAllButton() {
    return $("button.ot-pc-refuse-all-handler");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async rejectCookies() {
    const settingsButton = await this.settingsButton;
    await expect(settingsButton).toBeClickable();
    await settingsButton.click();

    const rejectAllButton = await this.rejectAllButton;
    await expect(rejectAllButton).toBeClickable();
    await rejectAllButton.click();
  }

  public open() {
    return super.open("intl/v/car-safety/a-million-more");
  }
}

export default new LoginPage();
