// @ts-check
const { test, expect} = require ('@playwright/test');
async function login(page, email, password) {
  await page.goto('https://milevision-stage.milezero.com/');

  // Fill in email and password and click login button
  //await page.fill('#email', email);
  await page.getByPlaceholder('username/email').fill(email)
  await page.getByPlaceholder('your password').fill(password);
  //await page.fill('#pass', password);
  await page.getByRole('button', { name: 'Log In' }).click();
  //await page.click('#loginbutton');

  // Wait for navigation to complete and check if login was successful
  await page.waitForNavigation();
  const title = await page.title();
  if (title === 'Milevision') {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }
}

module.exports = login;