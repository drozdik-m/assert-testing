/**
 * Class for simple testing
 * @example testing.Assert(1 + 2 === 4) -> this will write an error into the console
 */
export declare class Testing {
    private testName;
    private assertCount;
    private errorCount;
    /**
     * Create new test
     * @param testName Test name (optional)
     */
    constructor(testName?: string);
    /**
     * Set the testing name
     * @param testName Name of the test
     */
    SetTestName(testName: string): void;
    /**
     * Returns current test name
     * @returns Current test name
     */
    GetTestName(): string;
    /**
     * Testing method. If input is false, error is called.
     * @param input Testing sample (boolean)
     */
    Assert(input: boolean): void;
    /**
     * Testing method. If input is false, error is called.
     * @param input Testing sample (boolean)
     */
    static Assert(input: boolean): void;
    /**
     * Prints "start statement"
     */
    StartTestingLog(): void;
    /**
     * Prints "end statement" with error count
     */
    EndTestingLog(): void;
}
