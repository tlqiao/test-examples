module.exports= {
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['expect-puppeteer','./jest.setup.js'],
    testRunner: 'jest-circus/runner',
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }]
    ]
};