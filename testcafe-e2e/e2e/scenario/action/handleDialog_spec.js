fixture`handel dialog demo`
    .page`http://devexpress.github.io/testcafe/example/`;
test('should handel confirm dialog successfully', async t => {
    await t
        .setNativeDialogHandler((type, text, url) => {
            switch (type) {
                case 'confirm':
                    switch (text) {
                        case 'Do you want to subscribe?':
                            return false;
                        case 'Reset information before proceeding?':
                            return true;
                        default:
                            throw 'Unexpected confirm dialog!';
                    }
                case 'prompt':
                    return 'Hi there';
                case 'alert':
                    throw 'An alert was invoked!';
            }
        })
        .click('#populate');
    await t.click('#remote-testing');
});