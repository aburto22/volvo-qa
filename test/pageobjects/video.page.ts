import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get container() {
    return $("div[data-component='Video']");
  }

  public get video() {
    return this.container.$("video");
  }

  public get startVideoButton() {
    return this.container.$("button");
  }

  public get videoIframe() {
    return $("iframe");
  }

  public get videoPlayer() {
    return $("#movie_player");
  }

  public get playButton() {
    return $(".ytp-play-button");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  public async videoAutoplaying() {
    const video = await this.video;
    await expect(video.getAttribute("autoplay")).toBeTruthy();
    await expect(video.getAttribute("muted")).toBeTruthy();
  }

  public async playVideo() {
    const startVideoButton = await this.startVideoButton;
    await startVideoButton.click();

    const videoIframe = await this.videoIframe;
    await browser.switchToFrame(videoIframe);

    await browser.pause(1000);

    const videoPlayer = await this.videoPlayer;
    expect(videoPlayer).toHaveElementClass("playing-mode");

    await browser.pause(1000);
  }

  public async pauseVideo() {
    const playButton = await this.playButton;
    await playButton.click();

    const videoPlayer = await this.videoPlayer;
    expect(videoPlayer).toHaveElementClass("paused-mode");

    await browser.pause(1000);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("intl/v/car-safety/a-million-more");
  }
}

export default new LoginPage();
