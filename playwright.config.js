// @ts-check
import { defineConfig, Page } from '@playwright/test';

const config = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,

    trace: 'on-failure',
    screenshot: 'on',

    // Allow real browser window to be fully maximized
    viewport: null,

    launchOptions: {
      args: [
        '--start-maximized',              // Maximize browser
        '--force-device-scale-factor=1'   // Prevent auto-zooming by OS DPI
      ]
    },

    // Automatically apply 70% zoom to every page
    onPageCreated: async (page) => {
      await page.evaluate(() => {
        document.body.style.zoom = "0.7";  // Default zoom: 70%
      });
    }
  },
});

export default config;
