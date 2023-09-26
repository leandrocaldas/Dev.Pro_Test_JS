const { After, Before, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { remote } = require('webdriverio');
const Task1Page = require('../pageObjects/Task1Page');

let browser;
let task1Page;

Before({ tags: '@startWebDriver' }, async () => {
  browser = await remote({
      capabilities: {
        browserName: 'chrome',
      },
    });
  task1Page = new Task1Page(browser);
  });

Given('I am on the task1.html page', async () => {
  await task1Page.open();
});

When('I enter a log file name {string}', async (logFileName) => {
  await task1Page.enterLogFileName(logFileName);
});

When('I enter a log message {string}', async (logMessage) => {
  await task1Page.enterLogMessage(logMessage);
});

When('I select log level {string}', async (logLevel) => {
  await task1Page.selectLogLevel(logLevel);
});

When('I click the "Log" button', async () => {
  await task1Page.clickLogButton();
});

Then('the log output should contain the log entry', async () => {
  const expectedLogEntry = 'Test log message';
  const logOutputText = await task1Page.getLogOutputText();
  expect(logOutputText).to.include(expectedLogEntry);
});

After(async () => {
  if (browser) {
    await browser.deleteSession();
  }
});
