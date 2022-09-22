const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://site-e2e-git-develop-nyla.vercel.app',
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
