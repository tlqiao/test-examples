module.exports ={
    launch : {
        headless: false,
        slowMo: 150,
        args:['--window-size=1920,1080'],
        // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        devtools: false
    },
    browserContext : "default",
    exitOnPageError: false
};