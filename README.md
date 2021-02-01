# Scrapium - Web-scraping made easy
Using and setting up Scrapium is as easy as 1, 2, 3!

# Getting started
```js
const Scrapium = require('scrapium');
const { keys } = require('scrapium');

const Start = async() => {
    await Scrapium.browser('chrome');
    await Scrapium.goto('https://www.google.com');
    await Scrapium.get('q', ["Scrapium", Keys.RETURN]);
    await Scrapium.kill();
}
```
**Very important:** ensure you have the webdriver of the browser you are trying to use, otherwise you'll get an error<br>
I personally recommend [ChromeDriver](https://chromedriver.chromium.org/downloads) (uses Chromium)

This can also be used for **automation**!

# Docs
**"\*parameter" means that the paremeter is required** <br>
`browser(*select)` - Sets the web browser to use <br>
`goto(*link)` - Goes to specified website <br>
`click(*element)` - Click the specified element <br>
`doubleClick(*elemenet)` - Double click the specified element <br>
`getByName(*name, keys)` - Get an element on the website by name <br>
`getByXpath(*path, keys)` - Get an element on the website by XPath <br>
`getAllCookies()` - Get all cookies <br>
`getNamedCookie(*name)` - Get named cookie <br>
`addCookie(*name, *value)` - Add a cookie with a name and value <br>
`getByLinkText(*text)` - Get element by link text <br>
`kill()` - Will not close ChromeDriver process, will just kill node process (exits on code 0) <br>
`switchTab(*tabIndex)` - Switch to a tab (not working or unstable, don't use) <br>
`getTitle()` - Return the title of the page you are on <br>
`refresh()` - Refresh the page you are on <br>
`back()` - Go to the previous link that you were on <br>
`click(element)` - Click on an element <br>
`keys` - Variable, stores all keys
