# QA API Automation

## Overview

This project is an API automation testing project that uses JavaScript and Node.js to test the JSONPlaceholder REST API using GET, POST, PUT, PATCH, and DELETE requests.

## Tech Stack

* Language: JavaScript
* Runtime: Node.js
* Testing: Node.js built-in test runner (`node:test`)
* API: JSONPlaceholder REST API

## API Coverage

* GET
* POST
* PUT
* PATCH
* DELETE

## Project Structure

```text
qa-api-automation/
├── api/
│   └── userApi.js
├── data/
│   ├── userData.js
│   ├── userCreateData.js
│   ├── userUpdateData.js
│   ├── userPatchData.js
│   └── userDeleteData.js
├── tests/
│   ├── user.get.test.js
│   ├── user.post.test.js
│   ├── user.put.test.js
│   ├── user.patch.test.js
│   ├── user.delete.test.js
│   └── request.test.js
├── package.json
└── .gitignore
```

* `api/` - Contains the API request functions used by the tests.
* `data/` - Contains the test data used by the test cases.
* `tests/` - Contains the automated test cases for each HTTP method.
* `package.json` - Contains project information, scripts, and package configuration.
* `.gitignore` - Specifies files and folders that should not be tracked by Git.

## Test Scenarios

### GET /users

* Verify that a user can be retrieved successfully.
* Verify that a missing user returns a `404` status.

### POST /users

* Verify that a new user can be created successfully.
* Verify that the response contains the expected username and email.

### PUT /users

* Verify that an existing user's information can be fully updated.
* Verify that the response contains the updated username and email.

### PATCH /users

* Verify that a user's email can be partially updated.
* Verify that the response contains the updated email.

### DELETE /users

* Verify that a user can be deleted successfully.
* Verify that the API returns the expected response status.

## How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd qa-api-automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the automated tests

```bash
npm test
```

The test runner will execute all test files inside the `tests/` directory.

## Test Results

* Tests: 16
* Passed: 16
* Failed: 0

## QA Concepts Demonstrated

* REST API testing
* HTTP methods: GET, POST, PUT, PATCH, DELETE
* API request and response validation
* Status code validation
* Response data validation
* Positive and negative test cases
* Test data separation
* Reusable API request functions
* Automated assertions using `node:assert`
* Async/await
* Error handling with `try...catch`
* Expected error handling with `assert.rejects()`
* Parameterized tests using test data
* JavaScript ES modules
