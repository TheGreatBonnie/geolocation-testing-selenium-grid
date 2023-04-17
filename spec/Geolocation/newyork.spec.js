const Time = require('../pageModel/us')    

//to set jasmine default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 80 * 1000;
jasmine.getEnv().defaultTimeoutInterval = 800000;

// Start to write the first test case
describe("Local Time Tests:", function() {
    
    beforeEach(async () => {
        Time.before();
    });

    afterEach(async () => {
        Time.quitB();
    });

    it("User should be able to see their local time in New York", async function() {
        await Time.visit();

        await Time.time();
    });
});