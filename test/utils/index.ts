export const closeCookiesAndReload = async () => {
  const settingsButton = await $("#onetrust-pc-btn-handler");
  await expect(settingsButton).toBeClickable();
  await settingsButton.click();

  const rejectAllButton = await $("button.ot-pc-refuse-all-handler");
  await expect(rejectAllButton).toBeClickable();
  await rejectAllButton.click();

  await browser.refresh();
};

export const stopMainVideo = async () => {
  const pauseButton = await $('button[aria-label="pause"]');
  // const video = await $("video");
  await pauseButton.click();
};
