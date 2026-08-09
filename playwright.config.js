const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
    testDir: './tests',

    retries: 1,
    workers: 3,
    timeout: 40 * 1000,

    expect: {
        timeout: 5000,
    },

    reporter: 'html',

    use: {
        baseURL: process.env.BASE_URL,
        browserName: 'chromium',

        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
});