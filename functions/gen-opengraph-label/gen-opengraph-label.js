const playwright = require("playwright-aws-lambda");
const fs = require('fs');
const script = fs.readFileSync(path.resolve(__dirname, "label.js"), "utf-8");

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
      <div id="root"><div>NO IMAGE DATA :(</div></div>
    </body>
    </html>
  `)
  await page.addScriptTag({ content: script });
  const bbox = await page.evaluate(() => {
    const root = document.getElementById("root");
    const { x, y, width, height } = root.children[0].getBoundingClientRect();
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