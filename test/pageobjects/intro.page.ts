import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class IntroPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get container() {
    return $("div[data-component='ModelIntro']");
  }

  public get title() {
    return this.container.$("h2");
  }

  public get text() {
    return this.container.$("p");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async checkText() {
    const title = await this.title;
    expect(await title.getText()).toBe(
      "Ideas that change the world are often the most controversial."
    );

    const text = this.text;
    expect(await text.getText()).toBe(
      "After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it's time for the next step. For everyone's safety."
    );
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("intl/v/car-safety/a-million-more");
  }
}

export default new IntroPage();
