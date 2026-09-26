const fs = require('node:fs');
const path = require('node:path');

async function uploadFile(page, selector, filePath) {
  await page.locator(selector).setInputFiles(filePath);
}

async function selectOption(page, selector, option) {
  await page.locator(selector).selectOption(option);
}

async function selectCustomDropdown(page, triggerSelector, option) {
  await page.locator(triggerSelector).click();
  await page.getByRole('option', { name: option, exact: true }).click();
}

async function takeScreenshot(page, name, directory = 'test-results/screenshots') {
  const outputDirectory = path.resolve(process.cwd(), directory);
  fs.mkdirSync(outputDirectory, { recursive: true });

  return page.screenshot({
    path: path.join(outputDirectory, `${name}.png`),
    fullPage: true,
  });
}

module.exports = {
  selectCustomDropdown,
  selectOption,
  takeScreenshot,
  uploadFile,
};