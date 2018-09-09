exports.__esModule = true;
var Testing = (function () {
    function Testing(testName) {
        if (testName === void 0) { testName = ""; }
        this.testName = "";
        this.assertCount = 0;
        this.errorCount = 0;
        this.testName = testName;
    }
    Testing.prototype.SetTestName = function (testName) {
        this.testName = testName;
    };
    Testing.prototype.GetTestName = function () {
        return this.testName;
    };
    Testing.prototype.Assert = function (input) {
        if (!input) {
            console.error("Assert #" + this.assertCount + " failed");
            this.errorCount++;
        }
        this.assertCount++;
    };
    Testing.Assert = function (input) {
        if (!input)
            console.error("Assert failed");
    };
    Testing.prototype.StartTestingLog = function () {
        console.log("-----" + this.testName + (this.testName === "" ? "" : " ") + "test start-----");
    };
    Testing.prototype.EndTestingLog = function () {
        console.log("------" + this.testName + (this.testName === "" ? "" : " ") + "test end------");
        console.log(" > " + (this.errorCount == 0 ? "No errors found" : this.errorCount + " error" + (this.errorCount > 1 ? "s" : "") + " found"));
    };
    return Testing;
}());
exports.Testing = Testing;
