const { BeforeAll, AfterAll } = require("cucumber");

BeforeAll(async () => {
    await startDriver();
    await driver.manage().window().maximize();
});
AfterAll(async () => {
    await driver.quit();
});