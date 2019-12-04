const { resolve } = require("path");
const { browser } = require("protractor");
const { allScriptsTimeout, getPageTimeout, defaultTimeout } = require("./timeout.json");

module.exports.config = {
    baseUrl: "http://google.com",
    capabilities: {
        browserName: "chrome"
    },
    directConnect: true,
    specs: [
        resolve("features/**/*.feature"),
    ],
    allScriptsTimeout,
    getPageTimeout,
    ignoreUncaughtExceptions: true,
    disableChecks: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    cucumberOpts: {
        require: [
            resolve("support/**/*.js"),
            resolve("step_definitions/**/*.js"),
        ],
        defaultTimeoutInterval: defaultTimeout,
        "format-options": "{\"colorsEnabled\":true}",
    },
    async onPrepare() {
        await browser.manage().timeouts().implicitlyWait(implicitlyWait);
        await browser.manage().timeouts().pageLoadTimeout(pageLoadTimeout);
        await browser.manage().timeouts().setScriptTimeout(allScriptsTimeout);
        await browser.manage().maximize();
    }
};