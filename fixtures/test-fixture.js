const { test: base } = require('@playwright/test');
const POManager = require('../pages/POManager');

const test = base.extend({
    poManager: async ({ page }, use) => {
        const poManager = new POManager(page);
        await use(poManager);
    }
});

module.exports = { test };