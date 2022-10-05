import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get container() {
    return $("div[data-component='VideoTestimonials']");
  }

  public get title() {
    return this.container.$("h2");
  }

  public get videoContainers() {
    return this.container.$('div[data-autoid="videoTestimonials:container"]');
  }

  public get videos() {
    return this.container.$("video");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  public async testimonialsAreOnSite() {
    const videoContainers = await this.videoContainers;

    const windowSize = await browser.getWindowSize();
    const videoContainersOffset = await videoContainers.getLocation("y");

    const areTestimonialsVisible = windowSize.height > videoContainersOffset;

    const videos = await this.videos;
    expect(await videos.isExisting()).toBe(
      areTestimonialsVisible ? true : false
    );
  }

  public async testimonialsVisibleOnView() {
    const videoContainers = await this.videoContainers;
    await videoContainers.scrollIntoView();

    const videos = this.videos;

    expect(await videos.isExisting()).toBe(true);
  }

  public async playVideoOnClick() {
    const videos = await this.videos;
    expect(await videos.getProperty("controls")).toBeFalsy();

    const playButton = await videos.nextElement();
    expect(await playButton.isClickable()).toBeTruthy();
    await playButton.click();

    await browser.pause(1000);

    expect(await videos.getProperty("controls")).toBeTruthy();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("intl/v/car-safety/a-million-more");
  }
}

export default new LoginPage();
