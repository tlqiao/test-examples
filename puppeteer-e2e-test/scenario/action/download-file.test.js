describe('download file demo',()=> {
    it('should download file successfully', async()=> {
        await page.goto('https://file-examples.com/index.php/sample-documents-download/sample-doc-download/');
        await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './'});
        await expect(page).toClick('td a',{text:'Download sample DOC file'});
        await page.waitFor(8000);
    })
});