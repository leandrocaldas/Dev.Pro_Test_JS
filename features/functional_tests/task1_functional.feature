Feature: Functional Testing of task1.html

  @startWebDriver
  Scenario: Testing Log Message Functionality
    Given I am on the task1.html page
    When I enter a log file name "test.log"
    And I enter a log message "Test log message"
    And I select log level "INFO"
    And I click the "Log" button
    Then the log output should contain the log entry
