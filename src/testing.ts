
/**
 * Class for simple testing
 * @example testing.Assert(1 + 2 === 4) -> this will write an error into the console
 * @author Martin Drozdík <info@bonsai-development.cz> (https://bonsai-development.cz)
 */
export class Testing
{
    //--------------------------------------------------
    //----------ATTRIBUTES------------------------------
    //--------------------------------------------------
    private testName: string = "";
    private assertCount: number = 0;
    private errorCount: number = 0;

    //--------------------------------------------------
    //----------CONSTRUCTOR-----------------------------
    //--------------------------------------------------
    /**
     * Create new test
     * @param testName Test name (optional)
     */
    constructor(testName: string = "")
    {
        this.testName = testName;
    }


    //--------------------------------------------------
    //----------TEST NAME-------------------------------
    //--------------------------------------------------
    /**
     * Set the testing name
     * @param testName Name of the test
     */
    SetTestName(testName: string)
    {
        this.testName = testName;
    }

    /**
     * Returns current test name
     * @returns Current test name
     */
    GetTestName(): string
    {
        return this.testName;
    }

    //--------------------------------------------------
    //----------ASSERT----------------------------------
    //--------------------------------------------------
    /**
     * Testing method. If input is false, error is called.
     * @param input Testing sample (boolean)
     */
    Assert(input: boolean)
    {
        if (!input)
        {
            console.error("Assert #" + this.assertCount + " failed");
            this.errorCount++;
        }
        this.assertCount++;
    }

    /**
     * Testing method. If input is false, error is called.
     * @param input Testing sample (boolean)
     */
    static Assert(input: boolean)
    {
        if (!input)
            console.error("Assert failed");
    }
    
    //--------------------------------------------------
    //----------CONSOLE---------------------------------
    //--------------------------------------------------
    /**
     * Prints "start statement"
     */
    StartTestingLog()
    {
        console.log(`-----${this.testName}${this.testName === "" ? "" : " "}test start-----`);
    }
    /**
     * Prints "end statement" with error count
     */
    EndTestingLog()
    {
        console.log(`------${this.testName}${this.testName === "" ? "" : " "}test end------`);
        console.log(" > " + (this.errorCount == 0 ? `No errors found` : `${this.errorCount} error${this.errorCount > 1 ? "s" : ""} found`));
    }
}



