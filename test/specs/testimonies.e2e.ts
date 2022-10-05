import TestimoniesPage from "../pageobjects/testimonies.page";
import { closeCookiesAndReload } from "../utils";

describe("My Testimonies section", () => {
  before(async () => {
    await TestimoniesPage.open();
    await closeCookiesAndReload();
  });
  it("should only load testimonial videos if visible", async () => {
    await TestimoniesPage.testimonialsAreOnSite();
  });
  it("should display videos when scrolling into view", async () => {
    await TestimoniesPage.testimonialsVisibleOnView();
  });
  it("should play videos when clicking play", async () => {
    await TestimoniesPage.playVideoOnClick();
  });
});
