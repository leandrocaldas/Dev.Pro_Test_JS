Feature: API Endpoint Testing in logger.js

  @backend
  Scenario: Testing API Endpoint in logger.js
    Given a REST API endpoint at "http://localhost:3000/writeLog"
    When I make a POST request to the endpoint with a log entry
    Then the response status code should be 200
    And the response should contain "Log entry written successfully"
