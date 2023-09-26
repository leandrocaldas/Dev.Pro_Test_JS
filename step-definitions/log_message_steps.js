const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { log_message } = require('../logger');

let logFileName;
let logMessage;
let logLevel;
let logOutput;

Given('a log file {string}', function (fileName) {
  logFileName = fileName;
});

When('I log a message {string} with level {string}', function (message, level) {
  logMessage = message;
  logLevel = level;
  logOutput = log_message(logFileName, logMessage, logLevel);
});

Then('the message should be logged in {string} with level {string}', function (expectedFileName, expectedLevel) {
  expect(logFileName).to.equal(expectedFileName);
  expect(logLevel).to.equal(expectedLevel);
  expect(logOutput).to.include(logMessage);
});
