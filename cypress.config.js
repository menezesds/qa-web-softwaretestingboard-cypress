const { defineConfig } = require("cypress");

module.exports = defineConfig({
  responseTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    video: true
  },
});
