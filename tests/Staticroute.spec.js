// @ts-check
const {test, expect} = require('@playwright/test')
test('test', async ({ page }) => {
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByPlaceholder('username/email').fill('clmsustage');
  await page.getByPlaceholder('your password').fill('1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  //await page.goto('https://milevision-stage.milezero.com/#access_token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9taWxlemVyby1zdGFnZS5hdXRoMC5jb20vIn0..C7ghf_EoFMX6B0up.wzvg6qqmpspdOlUT0HJzVCh69GzTrosn8vH8J432F95UhrRPQV4iIRoftsL8f6sbtcdjE2yUP-kX5qa0fPVxNTZGAkxE7jxRgW25M8HJ1HYw9EIBZVOkgXn9BUMpZ9bqHbo7HiqIsMfeNx1hk8VUBCxwidZAf3onGjM65LpEH-Nly41gaXxzOe_4seLShiApA5wjKAxLlA0oBbJ2yqlQVrvkCR092YaJmbS0y-DqC6WudLqkItWAIF5nBIkdUPZq2exXsqCmR0UXA03e4akcVYM.A-ouhPXBTrbB0Q15QTrmUw&id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL3d3dy5taWxlemVyby5jb20vbWlsZXplcm8tc3RhZ2UvYXBwTmFtZSI6Ik1pbGVWaXNpb24iLCJhdXRob3JpemF0aW9uIjp7Imdyb3VwcyI6WyJQcmlvcml0eUV4cHJlc3MiLCJQcmlvcml0eUV4cHJlc3MgTWlsZVZpc2lvbiJdLCJyb2xlcyI6WyJNaWxlVmlzaW9uX1VzZXIiXSwicGVybWlzc2lvbnMiOltdfSwib3JnYW5pemF0aW9uIjp7Im9yZ05hbWUiOiI3NzE3Y2Q5ZC0zNzFiLTRlMWItYjEwNS1iMjlkMWFjYmRkZjciLCJvcmdJZCI6Ijc2YzIzNjg3LTQzYzQtNGZlMy1iNWYwLTRjZGQzODZlNzg5NSIsIkFsYWJvIjp7Im9yZ05hbWUiOiI3NzE3Y2Q5ZC0zNzFiLTRlMWItYjEwNS1iMjlkMWFjYmRkZjciLCJvcmdJZCI6Ijc2YzIzNjg3LTQzYzQtNGZlMy1iNWYwLTRjZGQzODZlNzg5NSJ9fSwib2JqZWN0cyI6eyJkcml2ZXJJZCI6Ijc0MmMwMGNlLWZiYzMtNDM3MC1iN2IxLTY3YWZhMTUwZTBkOSJ9LCJpc3MiOiJodHRwczovL21pbGV6ZXJvLXN0YWdlLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZGQ2NTA3ZmY4M2VlNjBmMjM5M2VkMjAiLCJhdWQiOiJ6Z08xVVF2UmZQajJOQ2pvbWFlYVFTSEpBYzJWOWRmMyIsImlhdCI6MTY4NjU5NDk2NywiZXhwIjoxNjg2NjMwOTY3fQ.SqS0PeAFSORexIVIfP0jss2ZvqvMo70yRE7Q76lN9hU&scope=openid%20authorization%20organization%20objects&expires_in=86400&token_type=Bearer&state=fo4HDKKwP8mVam3_VFt9P-PSfUN6BnS3');
  await page.getByTitle('Configure').click();
  await page.getByRole('button', { name: 'Warehouse' }).click();
  await page.frameLocator('#iframe').getByRole('link', { name: 'STATIC ROUTE' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).nth(3).click();
  await page.frameLocator('#iframe').getByLabel('Reference Id').press('CapsLock');
  await page.frameLocator('#iframe').getByLabel('Reference Id').fill('FAS_863');
  await page.frameLocator('#iframe').locator('#contractStopIdsDropdown div').nth(3).click();
  await page.frameLocator('#iframe').locator('#locationStopTypeDropdown svg').click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'PICKUP' }).click();
  await page.frameLocator('#iframe').getByLabel('Sequence').click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close' }).click();
  await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Seq' }).locator('svg').first().click();
  await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Seq' }).click();
});
