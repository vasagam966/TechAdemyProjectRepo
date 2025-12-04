// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 100 * 1000,
  retries: 1,
  testMatch: ['**/*.spec.js', '**/*.test.spec.js'],

  expect: {
    timeout: 40 * 1000,
  },

  // 🔹 Updated reporter — Allure always enabled
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright', { mode: 'on' }] // << important
  ],

  use: {
    browserName: 'chromium',
    headless: false,

    // 🔹 Capture results even for passed tests
    screenshot: 'on',
    video: 'on',
    trace: 'on', // You can switch to 'retain-on-failure' for size optimization

    viewport: null,

    launchOptions: {
      args: [
        '--start-maximized',
        '--force-device-scale-factor=1'
      ]
    },
  },

  // 🔹 Moved to correct position
  onPageCreated: async (page) => {
    await page.evaluate(() => {
      document.body.style.zoom = '0.7';
    });
  }
});
