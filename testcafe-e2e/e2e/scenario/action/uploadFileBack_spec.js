fixture('upload file demo');
test('should upload file successfully', async (t) => {
    await t.navigateTo("https://chercher.tech/practice/popups");
    await t.wait(3000);
    await t.setFilesToUpload('input[name="upload"]',['./test.jpeg']);
    await t.expect(Selector('input[name="upload"]').value).eql('');
    await t.wait(8000);
});