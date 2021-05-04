describe('Get wikipedia cover', () => {
    beforeAll('open browser', () => {
        return browser.url('https://google.com/');
    });
    
    it('To wikipedia', () => {
        let inputBox = $('.gLFyf');
        expect(inputBox).toExist();
        inputBox.setValue('wikipedia');
        browser.keys('Enter');
        let inputUrl = $('.LC20lb');
        //ver $(selector).getText()
        inputUrl.click();
        browser.pause(4000);
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        expect(browser).toHaveTitleContaining('Wikipedia');
    });
})
