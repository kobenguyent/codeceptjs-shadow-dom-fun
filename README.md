[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# Introduction

This project demonstrates how to drive your E2E tests with ShadowDOM using CodeceptJS - Playwright.

* Tests are written in TS
* CI/CD with Github Actions

## How to use

This is done using CodeceptJS <https://codecept.io/>

### Tech

This test uses a number of open source projects to work properly:

* <https://nodejs.org/en/> - evented I/O for the backend
* <https://codecept.io/> - CodeceptJS
* <https://books-pwakit.appspot.com> - E2E application that is used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies.

```sh
cd codeceptjs-shadow-dom-fun
npm i
```

### How to trigger test

To run all tests just simply type

```sh
npm test
```

Example output

```sh
> codeceptjs-shadow-dom-fun@1.0.0 test
> codeceptjs run --verbose

CodeceptJS v3.4.1 #StandWithUkraine
Using test root "/Users/thanh.nguyen/Desktop/codeceptjs-shadow-dom-fun"
Helpers: Playwright
Plugins: screenshotOnFail, tryTo, retryTo, eachElement

ShadowDom --
    [1]  Starting recording promises
    Timeouts: 
 › [Session] Starting singleton browser session
  Input a text in the input box and after search validate one of the book title
    I am on page "/"
    I fill field "#input", "Science"
    I press key "Enter"
    I wait for element "h2[class="title"]"
    I see element in d o m "h2[class="title"]"
  ✔ OK in 2128ms


  OK  | 1 passed   // 3s

```
## Report
https://kobenguyent.github.io/codeceptjs-shadow-dom-fun/