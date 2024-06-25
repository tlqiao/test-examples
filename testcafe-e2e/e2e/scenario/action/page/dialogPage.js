async function clickAlert(t) {
    await t
        .setNativeDialogHandler(() => {
            return true
        })
        .click('input[name="alert"]')
}

async function clickConfirm(t) {
    await t.setNativeDialogHandler((type, text) => {
        switch (text) {
            case 'Do you want to subscribe?':
                return false;
            case 'I am confirm':
                return true;
            default:
                throw 'Unexpected confirm dialog!';
        }
    })
        .click('input[name="confirmation"]')
}

async function clickPromote(t) {
    await t.setNativeDialogHandler(() => {
        return "Hello World";
    })
        .click('input[name="prompt"]')
}

module.exports = {
    clickAlert: clickAlert,
    clickConfirm: clickConfirm,
    clickPromote: clickPromote
};