const { setDefaultTimeout } = require("cucumber");
const { defaultTimeout } = require("../config/timeout.json");

setDefaultTimeout(defaultTimeout);