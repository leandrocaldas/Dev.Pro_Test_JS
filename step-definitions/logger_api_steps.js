const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const { expect } = require('chai');

let apiUrl = '';
let response;

Given('a REST API endpoint at {string}', (url) => {
    apiUrl = url;
});

When('I make a POST request to the endpoint with a log entry', async () => {
    try {
        response = await axios.post(apiUrl, {
            logFileName: 'test.log',
            logEntry: 'Test log entry',
        });
    } catch (error) {
        response = error.response;
    }
});

Then('the response status code should be {int}', (statusCode) => {
    expect(response.status).to.equal(statusCode);
});

Then('the response should contain {string}', (expectedText) => {
    expect(response.data).to.include(expectedText);
});
