
![Testing class - banner](images/testing-heading-image.png?raw=true "Testing - easy and light assert")

# Testing

"Testing" is a **simple class for testing your JavaScript code**. This module is easy to use, light, small and has zero dependencies. 

Testing module is written in TypeScript and compiled into commonJS. 

**This is not any high-tech code. It is not dependent on 6156851357 modules and does not offer unseen JavaScript magic. Download this, save a few minutes and use it to make some coffee. We #keepItSimple.**

## Download

You can download the module on [GitHub/assert-testing](https://github.com/drozdik-m/assert-testing.git) or using [npm/assert-testing](https://www.npmjs.com/package/assert-testing) service.

```
npm install assert-testing --save
```


## Assert - What is that? (skip if you know)

**It is a function that checks your code behaviour.**

The idea is extremely simple. You have a function with one Boolean parameter. If the Boolean is false, the function throws an error. Sounds easy? It is! But, you may ask, why Boolean? What the hell?

Assert has just one Boolean input because you write some expression into the parameter and compare it to expected result (==), which results in Boolean. This sentence confused me. Enough words! See this quick and easy example:

```javascript
Testing.Assert(1 + 2 == 3); //The result is true -> success (no action)
Testing.Assert(1 + 2 == 4); //The result is false -> error (exception or console warning)
```

It tests, if you can add two numbers. Neat, right? But that is kind of not the thing we need. Let’s say that you created a function that can tell you, if a string is a correct email address:

```javascript
Testing.Assert(IsEmail("info@domain.cz"));
Testing.Assert(IsEmail("domain@info.com"));
Testing.Assert(!IsEmail("info@domain"));
Testing.Assert(!IsEmail("infodomain"));
Testing.Assert(!IsEmail("info@.cz"));
Testing.Assert(!IsEmail("@"));
Testing.Assert(!IsEmail("@."));
Testing.Assert(!IsEmail("lorem-ipsum"));
```

We wrote all possible inputs and told the program what we expect as a return value. If your function "IsEmail" passes those asserts, it probably works correctly.

**The purpose of those tests is to check functionality in short term and long term.** If we add some new behavior, we can just run those asserts and check if everything still works. 

## Usage 
### Import the module

You can import the module using __import__ keyword or __require__ function.

```javascript
//Import
import { Testing } from "assert-testing";

//Usage
Testing.Assert(1 + 2 == 3);
```

```javascript
//Require
var T = require("assert-testing");

//Usage
T.Testing.Assert(1 + 2 == 3);
```


### Super simple example

Testing class has one static method for easy asserting. It does only the basic functionality. If false in inputted, the method writes error log into the console. Example:

```javascript
Testing.Assert("my.test.text".removeDots() == "mytesttext");
Testing.Assert(".test.text.".removeDots() == "testtext");
Testing.Assert("..test..text..".removeDots() == "testtext");
Testing.Assert(".".removeDots() == "");
Testing.Assert("....".removeDots() == "");
```

### Full functionality of the Testing class

```javascript
var testing = new Testing("Dots removing"); //Parameter name in the constructor is optional, it affects only the output messages (makes them more beautiful)
testing.StartTestingLog(); //Prints starting message

testing.Assert("my.test.text".removeDots() == "mytesttext");
testing.Assert(".test.text.".removeDots() == "testtext");
testing.Assert("..test..text..".removeDots() == "testtext");
testing.Assert(".".removeDots() == "");
testing.Assert("....".removeDots() == "");

testing.EndTestingLog(); //Prints ending message with error count
```

Sorry for my English, I hope it's readable.

