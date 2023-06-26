import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://books-pwakit.appspot.com',
      show: false,
      browser: 'chromium',
      waitForTimeout: 3000
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'codeceptjs-shadow-dom-fun',
  fullPromiseBased: false,
  plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./output",
    },
  },
}
