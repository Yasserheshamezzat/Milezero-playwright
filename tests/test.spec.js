// @ts-check
const { test, expect} = require('@playwright/test');
const {username} = require('../playwright.config');
const {password} = require('../playwright.config');
test('test', async ({ page }) => {
  await page.goto('https://github.com/microsoft/playwright');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill(username);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(password);
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Playwright' }).click();
});