describe('Get wikipedia cover', () => {
    beforeAll('open browser', () => {
        return browser.url('https://google.com');
    });
    
    it('To wikipedia', () => {
        let inputBox = $('#gLFyf gsfi');
        expect(inputBox).toExist();
        inputBox.setValue('wikipedia');
        //Enter;
        let inputUrl = $('.LC20lb DKV0Md=Wikipedia');  // como selecciono la primera???
        //ver $(selector).getText()
        inputUrl.click();
        browser.pause(2000);

        //expect(browser.getTitle()).toMatch('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        expect(browser).toHaveTitleContaining('Wikipedia');
    });
})

// describe('Google', () => {
//     it('Title', () => {
//         browser.url('https://wikipedia.org');
//         browser.pause(2000);
//         expect(browser).toHaveTitle('Google');
//     });
    
//     beforeAll('open browser', () => {
//         return browser.url('https://google.com');
//     });
//     it('can handle commands sync',() => {
//         let value = $('#1b');  // id de google
//         expect(value).toExist(); // si el selector existe pasa
//     });
//     it('title', () => {
//         browser.pause(2000); // pausa
//         expect(browser.getTitle()).toMatch('Google');  //matchea el titulo
//     })
// })
