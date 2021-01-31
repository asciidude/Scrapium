# Scrapium - Web-scraping made easy
Using and setting up Scrapium is as easy as 1, 2, 3!

# Getting started
```js
const Scrapium = require('scrapium');
const { Keys } = require('scrapium');

const Start = async() => {
    await Scrapium.browser('chrome');
    await Scrapium.goto('https://www.google.com');
    await Scrapium.get('q', true, ["Scrapium", Keys.RETURN]);
    await Scrapium.kill();
}
```
**Very important:** ensure you have the webdriver of the browser you are trying to use, otherwise you'll get an error<br>
I personally recommend [ChromeDriver](https://chromedriver.chromium.org/downloads) (uses Chromium)

This can also be used for **automation**!

# Docs
`browser()` - Sets the web browser to use <br>
`goto()` - Goes to specified website <br>
`get()` - Get an element on the website, send keys?, keys to send <br>
`kill()` - Will not close ChromeDriver process, will just kill node process (exits on code 0) <br>
`switchTab()` - Switch to a tab (not working or unstable, don't use) <br>
`title()` - Return the title of the page you are on <br>
`refresh()` - Refresh the page you are on <br>
`back()` - Go to the previous link that you were on

*GitHub probably has the latest version of Scrapium*