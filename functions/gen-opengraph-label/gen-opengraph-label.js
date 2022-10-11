const playwright = require("playwright-aws-lambda");

exports.handler = async function(event, ctx) {
  const browser = await playwright.launchChromium();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <div id="dexter"><div>Hello FELLAS!!!</div></div>
    </body>
    </html>
  `)
  const bbox = await page.evaluate(() => {
    const dexter = document.getElementById("dexter");
    const { x, y, width, height } = dexter.children[0].getBoundingClientRect();
    console.log('---> here you go: ', { x, y, width, height })
    return { x, y, width, height };
  });

  const screenshotBuffer = await page.screenshot({ clip: bbox });
  await browser.close();

  return {
    isBase64Encoded: true,
    statusCode: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Length": screenshotBuffer.length.toString()
    },
    body: screenshotBuffer.toString("base64")
  }
};