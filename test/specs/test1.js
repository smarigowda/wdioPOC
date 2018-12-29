import { expect } from 'chai'

describe('my awesome website', function() {
    it('should do some chai assertions', function() {
        browser.url('http://webdriver.io');
        const title = browser.getTitle(); //.should.be.equal('WebdriverIO - WebDriver bindings for Node.js');
        // debugger;
        const expectedTitle = 'WebdriverIO · Next-gen WebDriver test framework for Node.js'
        expect(title).to.equal(expectedTitle)
    });
});