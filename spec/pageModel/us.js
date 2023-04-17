selenium = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

const username= process.env.LT_USERNAME || "Username"
const accessKey=  process.env.LT_ACCESS_KEY || "Access Key"
var remoteHub = 'https://' + username + ':' + accessKey + '@hub.lambdatest.com/wd/hub';

const NewYorkCaps = {
	"browserName": "Chrome",
	"browserVersion": "108.0",
	"LT:Options": {
		"username": "Username",
		"accessKey": "Access Key",
		"geoLocation": "US",
		"platformName": "Windows 10",
		"timezone": "New_York",
		"build": "New York USA",
		"project": "Geolocation Testing",
		"name": "New York Local Time Test",
		"selenium_version": "4.0.0",
		"w3c": true
	}
}

const getElementById = async (driver, id, timeout = 8000) => {
    const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
    return await driver.wait(until.elementIsVisible(el), timeout);
};

const seleniumDriver = new selenium.Builder().
usingServer(remoteHub).
withCapabilities(NewYorkCaps).
build();

const timeUrl = 'https://virtualdom.netlify.app/'

class Main {

    constructor() {
        this.driver = seleniumDriver;
        this.byId = getElementById;
        this.url = timeUrl;
        this.localTime = ('time');
    }

    async visit() {
        await this.driver.get(this.url);
    }

    async time() {
        const currentTime = await this.byId(this.driver, this.localTime);
  
        currentTime.getText().then(function(value) {
        expect(value).toBe(`Time: ${new Date().toLocaleTimeString()}.`);
        });
    }

    async before() {
        this.driver;
    }

    async quitB() {
        await this.driver.quit();
    }
}

module.exports = new Main();