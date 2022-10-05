import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class IntroPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get container() {
    return $("div[data-component='ProductListCarousel']");
  }

  public get carouselItem() {
    return this.container.$(
      'div[data-autoid="springCarouselPane:carouselItem"]'
    );
  }

  public get allCarouselItems() {
    return this.container.$$(
      'div[data-autoid="springCarouselPane:carouselItem"]'
    );
  }

  public get images() {
    return this.carouselItem.$("img");
  }

  public get links() {
    return this.carouselItem.$$("a");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async carouselExists() {
    const carouselItem = await this.carouselItem;
    expect(carouselItem).toBeExisting();
  }

  public async imagesExistOnLoad() {
    const carouselItem = await this.carouselItem;

    const windowSize = await browser.getWindowSize();
    const carouselItemOffset = await carouselItem.getLocation("y");

    const isCarouselVisible = windowSize.height > carouselItemOffset;

    const images = await this.images;
    expect(await images.isExisting()).toBe(isCarouselVisible ? true : false);
  }

  public async imagesVisibleOnView() {
    const carouselItem = await this.carouselItem;
    await carouselItem.scrollIntoView();

    const images = await this.images;

    expect(images).toBeExisting();
    expect(await images.getProperty("src")).toBeTruthy();
    expect(await images.getProperty("alt")).toBeTruthy();
  }

  public async linksInCarouselItems() {
    const links = await this.links;

    const promises = links.map(async (link) => {
      expect(await link.getProperty("href")).toBeTruthy();
    });

    await Promise.all(promises);
  }

  public async contentCarouselItem() {
    const allCarouselItems = await this.allCarouselItems;
    expect(allCarouselItems).toHaveLength(8);

    const promises = allCarouselItems.map(async (item) => {
      const links = await item.$$("a");
      expect(links).toHaveLength(3);
    });

    await Promise.all(promises);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("intl/v/car-safety/a-million-more");
  }
}

export default new IntroPage();
