module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true, // Enable charts in the report
    reportPageTitle: 'Cypress Test Report', // Custom title for the report
    embeddedScreenshots: true, // Embed screenshots for failed tests
    inlineAssets: true, // Embed CSS and JS directly into the HTML
    saveAllAttempts: false, // Save reports for all test attempts (if retries are configured)
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'http://localhost:3001',
    trashAssetsBeforeRuns: true,
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
};
