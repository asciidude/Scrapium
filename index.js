const browsers = ["Chrome", "IE", "Edge", "Firefox", "Safari"];
const {Builder, By, Key, util} = require('selenium-webdriver');
const process = require('process');

//let driver = new Builder().forBrowser('firefox').build();
let driver;

const keys = {};
Object.assign(keys, Key);

const browser = async(select="chrome") => {
    select = select.toLowerCase();
    if(select == "firefox") {
        driver = await new Builder().forBrowser('firefox').build();
    } else if(select == "safari") {
        driver = await new Builder().forBrowser('safari').build();
    } else if(select == "ie" || select == "internetexplorer" || select == "internet explorer") {
        driver = await new Builder().forBrowser('ie').build();
    } else if(select == "chrome") {
        driver = await new Builder().forBrowser('chrome').build();
    } else {
        return console.log(new TypeError("You must choose from this list for your browser: " + browsers.join(', ')));
    }
}

const goto = async(website="https://google.com") => {
    await driver.get(website);
}

const getByName = async(name, sendKeys) => {
    if(!(typeof sendKeys == String || typeof sendKeys == Array)) {
        if(!sendKeys) return;
        console.log(new SyntaxError("sendKeys parameter must be typeof String or Array"));
        return;
    }

    if(sendKeys) {
        if(typeof sendKeys == String) {
            (await driver).findElement(By.name(name)).sendKeys(send.join('')).finally().then((result) => {
                return result;
            });
        }

        (await driver).findElement(By.name(name)).sendKeys(send.join('').toString()).finally().then((result) => {
            return result;
        });
    } else {
        (await driver).findElement(By.name(name)).finally().then((result) => {
            return result;
        });
    }
}

const getByXpath = async(path, sendKeys) => {
    if(!(typeof sendKeys == String || typeof sendKeys == Array)) {
        if(!sendKeys) return;
        console.log(new SyntaxError("sendKeys parameter must be typeof String or Array"));
        return;
    }

    if(sendKeys) {
        if(typeof sendKeys == String) {
            (await driver).findElement(By.xpath(path)).sendKeys(send.join('')).finally().then((result) => {
                return result;
            });
        }

        (await driver).findElement(By.xpath(path)).sendKeys(send.join('').toString()).finally().then((result) => {
            return result;
        });
    } else {
        (await driver).findElement(By.xpath(path)).finally().then((result) => {
            return result;
        });
    }
}

const getByLinkText = async(text) => {
    if(!(typeof sendKeys == String || typeof sendKeys == Array)) {
        if(!sendKeys) return;
        console.log(new SyntaxError("sendKeys parameter must be typeof String or Array"));
        return;
    }

    if(sendKeys) {
        if(typeof sendKeys == String) {
            (await driver).findElement(By.linkText(text)).sendKeys(send.join('')).finally().then((result) => {
                return result;
            });
        }

        (await driver).findElement(By.linkText(text)).sendKeys(send.join('').toString()).finally().then((result) => {
            return result;
        });
    } else {
        (await driver).findElement(By.linkText(text)).finally().then((result) => {
            return result;
        });
    }
}

const newTab = async() => {
    await driver.executeScript("window.open('', '_blank');");
}

const executeScript = async(script) => {
    if(!typeof script == String) {
        console.log(new TypeError("Script parameter must be a string"));
        return;
    }

    await driver.executeScript(script);
}

const refresh = async() => {
    await driver.navigate().refresh();
}

const back = async() => {
    await driver.navigate().back();
}

const switchTab = async(tabIndex) => {
    let tab = (await driver.getAllWindowHandles()).indexOf(tabIndex);
    if(tab == -1) {
        console.log(new RangeError("Unable to switch to tab"));
        return;
    }
    
    console.log(tab);
    await driver.switchTo().window(tab);
}

const click = async(element) => {
    try {
        //driver.actions().mouseMove(element).mouseDown().perform();
        const actions =  driver.actions({async: true})
        await actions.contextClick(element).perform();
    } catch(e) {
        console.log(new Error("Unable to click element, error: \n" + e));
    }
}

const doubleClick = async(element) => {
    try {
        //driver.actions().mouseMove(element).mouseDown().perform();
        const actions =  driver.actions({async: true})
        await actions.doubleClick(element).perform();
    } catch(e) {
        console.log(new Error("Unable to double click element, error: \n" + e));
    }
}

const addCookie = async(key, value) => {
    try {
        await driver.manage().addCookie({name: key, value: value});
    } catch(e) {
        console.log(new Error("Unable to add cookie, error: " + e))
    }
}

const getNamedCookie = (name) => {
    try {
        driver.manage().getCookie(name).then((cookie) => {
            console.log(`Cookie named ${name} details:, ${cookie}`);
        });
    } catch(e) {
        console.log(new Error("Unable to get cookie by name, error: " + e))
    }
}

const getAllCookies = () => {
    try {
        driver.manage().getCookies().then(function (cookies) {
            console.log(`All cookie(s) details:, ${cookies}`);
        });
    } catch(e) {
        console.log(new Error("Unable to get all cookies, error: " + e))
    }
}

const getTitle = async() => {
    return (await driver).getTitle();
}

const kill = async() => {
    console.log("Successfully killed Scrapium process (ID: " + process.pid + ")");
    await process.exit(0);
}


module.exports = {
    browser, goto, getByName, keys,
    refresh, back, newTab, kill,
    switchTab, getTitle, getByXpath,
    click, doubleClick, addCookie,
    getNamedCookie, getAllCookies,
    getByLinkText, executeScript
}