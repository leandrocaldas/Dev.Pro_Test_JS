const locators = require('./locators/task1Locators');

class Task1Page {
  constructor(browser) {
    this.browser = browser;
  }

  async open() {
    await this.browser.url('http://localhost:8080/task1.html');
  }

  async enterLogFileName(logFileName) {
    const logFileNameInput = await this.browser.$(locators.logFileNameInput);
    await logFileNameInput.setValue(logFileName);
  }

  async enterLogMessage(logMessage) {
    const logMessageInput = await this.browser.$(locators.logMessageInput);
    await logMessageInput.setValue(logMessage);
  }

  async selectLogLevel(logLevel) {
    const logLevelSelect = await this.browser.$(locators.logLevelSelect);
    await logLevelSelect.selectByVisibleText(logLevel);
  }

  async clickLogButton() {
    const logButton = await this.browser.$(locators.logButton);
    await logButton.click();
  }

  async getLogOutputText() {
    const logOutput = await this.browser.$(locators.logOutput);
    return logOutput.getText();
  }

  async waitForLogOutputContains(expectedText) {
    await this.browser.waitUntil(
      async () => {
        const logOutputText = await this.getLogOutputText();
        return logOutputText.includes(expectedText);
      },
      {
        timeout: 5000,
        timeoutMsg: `Log output did not contain expected text: ${expectedText}`,
      }
    );
  }
}

module.exports = Task1Page;
