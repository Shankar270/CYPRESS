const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl:"https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    DemoSite:'https://demo.automationtesting.in/Register.html'
  }
});
