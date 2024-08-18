const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild")


async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  )
  return config
};
module.exports = defineConfig({
  e2e: {
    viewportHeight:1200,
    viewportWidth:1400,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    responseTimeout:30000,
    requestTimeout: 30000,
    setupNodeEvents,
    specPattern: ["cypress/e2e/features/*.feature"],
    chromeWebSecurity: false,
    env:{
      baseUrl: "https://magento.softwaretestingboard.com"
    }
  },
});
