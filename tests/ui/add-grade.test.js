const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('https://vlzahariev-exam.onrender.com/Add-Grade');
    const form = await page.$('#subject');
    expect(form).toBeTruthy();
  });
  