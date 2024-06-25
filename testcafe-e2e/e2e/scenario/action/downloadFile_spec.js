import {Selector} from 'testcafe'
fixture("download file demo");
test('should download file successfully',async (t)=> {
   await t.navigateTo("https://file-examples.com/index.php/sample-documents-download/sample-doc-download/");
   const downLoadElement = await Selector('tbody td a').withText('Download sample DOC file');
   await t.click(downLoadElement);
});