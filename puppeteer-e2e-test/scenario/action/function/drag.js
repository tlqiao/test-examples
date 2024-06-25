async function dragElement(sourceElementHandle ,targetElementHandle) {
        const sourceRect = await page.evaluate((elementHandle) => {
                const {top, left, bottom, right} = elementHandle.getBoundingClientRect();
                return {top, left, bottom, right};
        }, sourceElementHandle);

        const targetRect = await page.evaluate((elementHandle) => {
                const {top, left, bottom, right} = elementHandle.getBoundingClientRect();
                return {top, left, bottom, right};
        }, targetElementHandle);
        await page.mouse.move((sourceRect.left+sourceRect.right)/2,(sourceRect.top+sourceRect.bottom)/2);
        await page.mouse.down();
        await page.mouse.move((targetRect.left+targetRect.right)/2,(targetRect.top+targetRect.bottom)/2);
        await page.mouse.up();
}
module.exports = {dragElement:dragElement};