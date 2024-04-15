const { defineConfig } = require("cypress");

module.exports = defineConfig({
  responseTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
    video: true,
    baseUrl: 'https://magento.softwaretestingboard.com/'
  },
  projectId: "x8oogh"
});
