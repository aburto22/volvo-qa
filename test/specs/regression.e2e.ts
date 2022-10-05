import { closeCookiesAndReload, stopMainVideo } from "../utils";

describe("Regression test", () => {
  before(async () => {
    await browser.url(
      "https://www.volvocars.com/intl/v/car-safety/a-million-more"
    );
    await closeCookiesAndReload();
    await stopMainVideo();
  });
  it("should compare successfully to full-screen image", async () => {
    // We accept a small difference to account for any differences in the video autoplaying.
    expect(await browser.checkFullPageScreen("fullScreen")).toBeLessThan(7);
  });
});
