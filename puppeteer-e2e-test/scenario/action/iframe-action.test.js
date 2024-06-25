describe("iframe demo", () => {
    it("should control element in iframe successfully", async() => {
        page.on('dialog', async dialog => {
            await dialog.dismiss()});
        await page.goto('https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml_button_test');
        const frame = await page.frames().find(f => f.name() === 'iframeResult');
        await frame.waitForSelector('button');
        await frame.click('button');
    });

    it("should upload file in iframe successfully ", async() => {
        await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_file");
        const elementHandle = await page.$('iframe[name="iframeResult"]');
        const frame = await elementHandle.contentFrame();
        await frame.waitForSelector('input[type="file"]');
        const uploadFileHandle =  await frame.$('input[type="file"]');
        await uploadFileHandle .uploadFile('./testdata/test.txt')
    })
});