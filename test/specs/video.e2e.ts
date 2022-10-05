import VideoPage from "../pageobjects/video.page";
import { closeCookiesAndReload } from "../utils";

describe("My Video section", () => {
  before(async () => {
    await VideoPage.open();
    await closeCookiesAndReload();
  });
  it("should have video autoplaying muted", async () => {
    await VideoPage.videoAutoplaying();
  });
  it("should play video", async () => {
    await VideoPage.playVideo();
  });
  it("should pause video", async () => {
    await VideoPage.pauseVideo();
  });
});
