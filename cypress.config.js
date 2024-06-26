const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ynqx85",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    record: false,
    
    // video: true,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome', //npx cypress run --reporter mochawesome  
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" }
  },
});
