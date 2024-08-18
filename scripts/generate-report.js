const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './cypress/reports/json', 
  reportPath: './cypress/reports/html', 
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '10',
    },
  },
  customData: {
    title: 'Run Info',
    data: [
      { label: 'Project', value: 'Cypress Test Project' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
      { label: 'Execution End Time', value: new Date().toLocaleString() },
    ],
  },
});
