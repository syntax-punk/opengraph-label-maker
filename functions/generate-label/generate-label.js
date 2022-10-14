const playwright = require("playwright-aws-lambda");

const getUrl = (queryStringParameters) => {
  const {
    cardpath = "https://earnest-youtiao-7b4d2a.netlify.app",
    title = "No Title",
    handle = "",
    tags = "", 
    width = 1200,
    height = 630,
  } = queryStringParameters;
  return `${cardpath}?id=${id}&title=${title}&handle=${handle}&tags=${tags}&width=${width}&height=${height}`
};

exports.handler = async function(event, ctx) {
  const { queryStringParameters } = event;
  const url = getUrl(queryStringParameters)
  console.log('-> query string: ', queryStringParameters)
  console.log('-> url: ', url)
  console.log('-> event: ', event)
  const browser = await playwright.launchChromium();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);

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