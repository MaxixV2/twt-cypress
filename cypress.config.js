const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wgyjn3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.realworld.io/#'
  },
});
