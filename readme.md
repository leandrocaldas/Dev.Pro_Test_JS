Certainly, here's a basic README file for your project based on the provided scripts in your `package.json`:

---
# Questions:
### 1. Could you briefly give 1-2 examples of test automation tasks that you've had to solve for the last ~6 months? 2. What tools did you use for automated testing?
# Test Automation Projects

## Project 1: Mobile and Backend Testing Framework

- **Description**: We have developed a comprehensive framework for end-to-end (E2E) and regression testing of a mobile application (Android and iOS) and its backend, which serves as an online marketplace. These tests are executed with every new application release.

- **Tools and Technologies**: 
  - Developed in Python
  - Utilized Selenium for test automation
  - Employed Behave (similar to Cucumber) for behavior-driven testing
  - Implemented design patterns, including the Page Object Model
  - Integrated with Zephyr for test reporting
  - Executed tests in the BrowserStack environment
  - Utilized Azure DevOps for continuous integration and continuous deployment (CI/CD).

## Project 2: Database Consistency Validation Tool

- **Description**: As part of the backend development team, I created an automation tool in the form of a microservice. This tool is responsible for validating the consistency of our NoSQL database, ensuring that all vendor information complies with our contract system.

- **Tools and Technologies**: 
  - Developed in Python
  - Utilized a NoSQL database
  - Employed Pandas for data consistency validation
  - Utilized Kafka for communication
  - Integrated with Azure DevOps for CI/CD
  - Implemented unit testing using pytest with python-mock.

## Project 3: Web Application E2E Testing

- **Description**: From December 2020 to February 2022, I was involved in end-to-end (E2E) testing of a web application to ensure its quality before new releases.

- **Tools and Technologies**: 
  - Developed E2E tests using Cypress framework
  - Implemented development in TypeScript
  - Integrated with Jenkins for CI/CD.


# Task 1: Logger

Context: Your team is working on a project where you need to log various events and errors.
You are asked to create a simple logging function that writes messages to a text file with a timestamp.

Example usage:
log_message(""application.log"", ""User logged in"", ""INFO"")
log_message(""application.log"", ""Failed login attempt"", ""WARNING"")

Expected Output in application.log:
[2023-04-24 12:34:56] [INFO] User logged in
[2023-04-24 12:35:10] [WARNING] Failed login attempt

# Task 1.1: Tests
Write tests scenarios for Logger

# Task 2: Inventory Management

Context: You are developing a simple inventory management system for a small store.
You need to create a function that takes a list of products with their names, prices, and stock levels, and returns a sorted list of products based on a given sort key (name, price, or stock) and order (ascending or descending).

Example Input:
[
    {"name": "Product A", "price": 100, "stock": 5},
    {"name": "Product B", "price": 200, "stock": 3},
    {"name": "Product C", "price": 50, "stock": 10}
]

sort_key = ""price""
ascending = False

Expected Output:
[
    {"name": "Product B", "price": 200, "stock": 3},
    {"name": "Product A", "price": 100, "stock": 5},
    {"name": "Product C", "price": 50, "stock": 10}
]


## Getting Started

These instructions will help you get your project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install and how to install them:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm: npm is included with Node.js, so you don't need to install it separately.

### Installing and executing

A step-by-step guide to get your development environment set up.

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd test_JS
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```
### Starting server and opening web broser

To start both backend and HTTP server concurrently, you can use the following command:

```bash
npm run start
```

This command will start both servers and web broser application simultaneously using `concurrently`.

### Running Tests

### Executing tests
To run tests project, use the following command:

if the servers not up:
```bash
npm run test
```

if the server up
```bash
npm run start-test
```

This command will start both servers, run your tests using WebDriverIO.
PS.: One test should fail, to see on report.

### Creating test report - Allure
To create test report, use the following command:

```bash
npm run test-report
```
generate Allure reports, and open the test report in your default web browser.

### Starting Both Servers Concurrently

To start both the server and HTTP server concurrently, you can use the following command:

```bash
npm run start-servers
```

This command will start both servers simultaneously using `concurrently`.

### Running the Backend Server

To start the backend server, use the following command:

```bash
npm run start-server
```

This will start the server using `node server.js`.

### Running the HTTP Server

To start an HTTP server for your project, use the following command:

```bash
npm run start-http-server
```

This will start an HTTP server on port 8080 using `http-server`.