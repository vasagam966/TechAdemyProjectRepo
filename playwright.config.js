// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  retries: 2,
  expect: {
    timeout: 40 * 1000,
  },

  // 🔹 Updated reporter — Allure added here
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    viewport: null,

    launchOptions: {
      args: [
        '--start-maximized',
        '--force-device-scale-factor=1'
      ]
    },

    onPageCreated: async (page) => {
      await page.evaluate(() => {
        document.body.style.zoom = "0.7";
      });
    }
  },
});
