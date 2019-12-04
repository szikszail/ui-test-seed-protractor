require("chromedriver");
const { Builder } = require("selenium-webdriver");

let driver;

global.startDriver = async () => {
    driver = await new Builder().forBrowser("chrome").build();
}

Object.defineProperty(global, "driver", {
    get() {
        if (!driver) {
            throw new Error("Initialize driver! await startDriver();")
        }
        return driver;
    },
    set() {
        // noop
    }
});