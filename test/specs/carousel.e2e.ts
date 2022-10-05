import CarouselPage from "../pageobjects/carousel.page";
import { closeCookiesAndReload } from "../utils";

describe("My Carousel section", () => {
  before(async () => {
    await CarouselPage.open();
    await closeCookiesAndReload();
  });
  it("should have carousel items", async () => {
    await CarouselPage.carouselExists();
  });
  it("should only load images if visible", async () => {
    await CarouselPage.imagesExistOnLoad();
  });
  it("should display images when scrolling into view", async () => {
    await CarouselPage.imagesVisibleOnView();
  });
  it("should have items with anchor links to car info page", async () => {
    await CarouselPage.linksInCarouselItems();
  });
});
