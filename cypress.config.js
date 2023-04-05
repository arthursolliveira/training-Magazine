const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.magazineluiza.com.br/',
    viewportWidth: 1440,
    viewportHeight: 900
  },
});
