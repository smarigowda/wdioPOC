import { expect } from 'chai'

describe('my awesome website', function() {
    it('should do some chai assertions', function() {
        browser.url('http://webdriver.io');
        const title = browser.getTitle(); //.should.be.equal('WebdriverIO - WebDriver bindings for Node.js');
        // debugger;
        expect(title).to.equal('WebdriverIO - WebDriver bindings for Node.js')
    });
});