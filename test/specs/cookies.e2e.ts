import CookiesPage from "../pageobjects/cookies.page";

describe("My Cookies popup", () => {
  before(async () => {
    await CookiesPage.open();
  });
  it("should refuse all cookies", async () => {
    await CookiesPage.rejectCookies();
  });
});
