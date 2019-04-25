describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  test('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  });
});
