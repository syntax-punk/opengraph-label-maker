const playwright = require("playwright-aws-lambda");

const getUrl = (queryStringParameters) => {
  const {
    cardpath = "https://labeler.syntaxpunk.com",
    title = "No Title",
    handle = "",
    tags = "", 
    width = 1200,
    height = 630,
  } = queryStringParameters;
  return `${cardpath}?title=${title}&handle=${handle}&tags=${tags}&width=${width}&height=${height}`
};

exports.handler = async function(event, ctx) {
  const { queryStringParameters } = event;
  const url = getUrl(queryStringParameters)
  console.log('-> query string: ', queryStringParameters)
  console.log('-> url: ', url)
  console.log('-> event: ', event)

  let browser = null;
  let screenshotBuffer = null;
  let errorMessage = '';

  try {
    browser = await playwright.launchChromium();
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto(url);

    const bbox = await page.evaluate(() => {
      const root = document.getElementById("root");
      const { x, y, width, height } = root.children[0].getBoundingClientRect();
      console.log('--> here you go: ', { x, y, width, height })
      return { x, y, width, height };
    });
  
    screenshotBuffer = await page.screenshot({ clip: bbox });
  } catch (error) {
    console.error('-> [ERROR]: ', error)
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  if (!screenshotBuffer) {
    return {
      statusCode: 500,
      body: "Server Error: " + errorMessage
    }
  }

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