Feature: Testing log_message function
  
  Scenario: Logging a message with INFO level
    Given a log file "test.log"
    When I log a message "User logged in" with level "INFO"
    Then the message should be logged in "test.log" with level "INFO"

  Scenario: Logging a message with WARNING level
    Given a log file "test.log"
    When I log a message "Failed login attempt" with level "WARNING"
    Then the message should be logged in "test.log" with level "WARNING"
