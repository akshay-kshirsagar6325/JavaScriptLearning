const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    supportFile: "/home/akshay/Desktop/cypress/support/commands.js", // Path to your support file
    specPattern: "e2e/**/*.cy.js",

  },
});
