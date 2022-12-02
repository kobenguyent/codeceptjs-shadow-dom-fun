Feature('ShadowDom');

Scenario('Input a text in the input box and after search validate one of the book title',  async ({ I }) => {
    I.amOnPage('/')
    I.fillField('#input', 'Science')
    I.pressKey('Enter')
    I.waitForElement('h2[class="title"]')
    await I.seeElementInDOM('h2[class="title"]')
});
