const playwright = require("playwright-aws-lambda");

exports.handler = async function(event, ctx) {
  const browser = await playwright.launchChromium();
  const context = await browser._defaultContext;
  const page = await context.newPage();
  await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div> id="dexter">Hello</div>
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