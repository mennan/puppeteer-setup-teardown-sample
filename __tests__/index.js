const timeout = 20000;

describe(
  "Google Test",
  () => {
    let page;

    afterAll(async () => {
      if (page !== undefined) await page.close();
    });

    test("Search test word in Google", async () => {
      jest.setTimeout(timeout);

      page = await global.__BROWSER__.newPage();
      await page.goto("https://google.com");

      await page.waitForSelector("input[name='q']");
      await page.waitForSelector("input[type='submit']");
      await page.type("input[name='q']", "test");
      await page.waitFor(1000);
      await page.click("input[type='submit']");
    });
  },
  timeout
);
