exports.__esModule = true;
/**
 * Class for simple testing
 * @example testing.Assert(1 + 2 === 4) -> this will write an error into the console
 */
var Testing = /** @class */ (function () {
    //--------------------------------------------------
    //----------CONSTRUCTOR-----------------------------
    //--------------------------------------------------
    /**
     * Create new test
     * @param testName Test name (optional)
     */
    function Testing(testName) {
        if (testName === void 0) { testName = ""; }
        //--------------------------------------------------
        //----------ATTRIBUTES------------------------------
        //--------------------------------------------------
        this.testName = "";
        this.assertCount = 0;
        this.errorCount = 0;
        this.testName = testName;
    }
    //--------------------------------------------------
    //----------TEST NAME-------------------------------
    //--------------------------------------------------
    /**
     * Set the testing name
     * @param testName Name of the test
     */
    Testing.prototype.SetTestName = function (testName) {
        this.testName = testName;
    };
    /**
     * Returns current test name
     * @returns Current test name
     */
    Testing.prototype.GetTestName = function () {
        return this.testName;
    };
    //--------------------------------------------------
    //----------ASSERT----------------------------------
    //--------------------------------------------------
    /**
     * Testing method. If input is false, error is called.
     * @param input Testing sample (boolean)
     */
    Testing.prototype.Assert = function (input) {
        if (!input) {
            console.error("Assert #" + this.assertCount + " failed");
            this.errorCount++;
        }
        this.assertCount++;
    };
    /**
     * Testing method. If input is false, error is called.
     * @param input Testing sample (boolean)
     */
    Testing.Assert = function (input) {
        if (!input)
            console.error("Assert failed");
    };
    //--------------------------------------------------
    //----------CONSOLE---------------------------------
    //--------------------------------------------------
    /**
     * Prints "start statement"
     */
    Testing.prototype.StartTestingLog = function () {
        console.log("-----" + this.testName + (this.testName === "" ? "" : " ") + "test start-----");
    };
    /**
     * Prints "end statement" with error count
     */
    Testing.prototype.EndTestingLog = function () {
        console.log("------" + this.testName + (this.testName === "" ? "" : " ") + "test end------");
        console.log(" > " + (this.errorCount == 0 ? "No errors found" : this.errorCount + " error" + (this.errorCount > 1 ? "s" : "") + " found"));
    };
    return Testing;
}());
exports.Testing = Testing;
