import IntroPage from "../pageobjects/intro.page";
import { closeCookiesAndReload } from "../utils";

describe("My Intro section", () => {
  before(async () => {
    await IntroPage.open();
    await closeCookiesAndReload();
  });
  it("should have correct intro text", async () => {
    await IntroPage.checkText();
  });
});
