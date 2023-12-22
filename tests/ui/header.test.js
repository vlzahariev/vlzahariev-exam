const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://vlzahariev-exam.onrender.com'); 
    const homeLink = await page.$('a');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  