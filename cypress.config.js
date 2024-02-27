const { defineConfig } = require("cypress");

module.exports = defineConfig({
  responseTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    video: false
  },
});
