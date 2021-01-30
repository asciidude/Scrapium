# Scrapium - Web-scraping made easy
Using and setting up Scrapium is as easy as 1, 2, 3!

# Getting started
```js
const Scrapium = require('Scrapium');
const { Keys } = require('Scrapium');

const Start = async() => {
    await Scrapium.browser('chrome');
    await Scrapium.goto('https://www.google.com');
    await Scrapium.get('q', true, ["Scrapium", Keys.RETURN]);
}
```
**Very important:** ensure you have the webdriver of the browser you are trying to use, otherwise you'll get an error<br>
I personally recommend [ChromeDriver](https://chromedriver.chromium.org/downloads) (uses Chromium)

This can also be used for **automation**!

# Docs
`browser()` - Sets the web browser to use <br>
`goto()` - Goes to a website <br>
`get()` - Get an element on the website, send keys?, keys to send

**For developers using this GitHub: Scrapium uses selenium-webdriver**

**Note: I do not reccomend using this; you should use Puppeteer. This is still a prototype and has very little features**