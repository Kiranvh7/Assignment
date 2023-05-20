const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl":"https://www.amazon.in",

    setupNodeEvents(on, config) {

      allureWriter(on, config);
            return config;
      //require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
