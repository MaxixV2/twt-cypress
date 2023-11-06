# DESCRIPTION

This is a project for e2e testing of https://demo.realworld.io/#/ with Cypress using JavaScript

## REQUIREMENTS:

 - Node.js >= v18.17.1

### INSTALLATION:
 -  Clone repository
```
git clone https://github.com/MaxixV2/twt-cypress.git
```
 - Install dependencies
```
npm install
```
### USAGE:
To open Cypress:
```
npx cypress open
```

Example of Cypress UI report:

![image](https://github.com/MaxixV2/twt-cypress/assets/99399536/2f8783c9-e9de-471d-9c41-0afdb3e75e7d)

To run tests in headless mode:
```
npx cypress run --headless
```

Example of report in headless mode:

![image](https://github.com/MaxixV2/twt-cypress/assets/99399536/46b714c5-0cca-4913-94f7-4d53f578f6d5)


To run specific test use `--spec` flag

Example:
```
npx cypress run --headless
```
