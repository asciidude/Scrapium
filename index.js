const browsers = ["Chrome", "IE", "Edge", "Firefox", "Safari"];
const {Builder, By, Key, util} = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const process = require('process');
let driver = new Builder().forBrowser('firefox').build();
//let driver;

const Keys = {};
Object.assign(Keys, Key);

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
        return console.error("You must choose from this list for your browser: " + browsers.join(', '));
    }
}

const goto = async(website="https://google.com") => {
    await driver.get(website);
}

const get = async(element, sendKeys=false, send) => {
    if(sendKeys) {
        return await driver.findElement(By.name(element)).sendKeys(send.join('').toString()).finally().then((result) => {
            return result;
        });
    } else {
        return await driver.findElement(By.name(element)).finally().then(() => {
            return result;
        });
    }
}

const newTab = async() => {
    await driver.executeScript("window.open('', '_blank');");
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
        console.error("Unable to switch to tab");
        return;
    }
    
    console.log(tab);
    await driver.switchTo().window(tab);
}

const kill = async() => {
    console.log("Successfully killed Scrapium process (ID: " + process.pid + ")");
    await process.exit(0);
}

const title = async() => {
    (await driver).getTitle().finally().then((result) => {
        console.log(result);
    });
}

module.exports = {
    browser, goto, get, Keys,
    refresh, back, newTab, kill,
    switchTab, title, 
}