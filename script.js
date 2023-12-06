// CHAPTER 5
// Practice exercise 5.1 
// Step 1: Create a variable for the max value
var maxValue = 5;

// Step 2: Generate a random number for the solution
var solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution); // Comment out in the final version

// Step 3: Create a variable to track whether the answer is correct
var isCorrect = false;

// Step 4: Use a while loop to prompt the user for a number between 1 and 5
while (!isCorrect) {
    // Prompt the user for input
    var userGuess = prompt("Enter a number between 1 and " + maxValue);

    // Convert the user input to a number
    userGuess = parseInt(userGuess);

    // Step 5: Check if the guess is correct and provide feedback
    if (userGuess === solution) {
        isCorrect = true;
        console.log("Congratulations! You guessed the correct number: " + solution);
    } else if (userGuess < solution) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}

// Game Over message
console.log("Game Over!");
// Practice exercise 5.2
// Step 1: Set the starting counter to 0
var counter = 0;

// Step 2: Create a variable, step, to increase the counter by
var step = 3;

// Step 3: Add a do-while loop
do {
    // Print the counter to the console
    console.log("Counter: " + counter);

    // Increment the counter by the step amount
    counter += step;

    // Step 4: Continue to loop until the counter is equal to 100 or more than 100
} while (counter < 100);

// Output a message when the loop is complete
console.log("Counter has reached 100 or more. Loop complete!");

// Practice exercise 5.3
// Step 1: Setup a blank array, myWork
var myWork = [];

// Step 2: Using a for loop, create a list of 10 objects
for (var i = 1; i <= 10; i++) {
    // Step 3: Use a ternary operator to set the alternating true/false status
    var isClassRunning = i % 2 === 0 ? false : true;

    // Step 4: Create a lesson using a temporary object variable
    var lesson = {
        name: 'Lesson ' + i,
        status: isClassRunning
    };

    // Step 5: Push the object to the myWork array
    myWork.push(lesson);
}

// Step 6: Output the array to the console
console.log(myWork);

// Practice exercise 5.4
// Step 1: Create an empty array, myTable, to hold your table data
var myTable = [];

// Step 2: Set variable values for the number of rows and columns
var numRows = 4; // You can change this to control the number of rows
var numColumns = 3; // You can change this to control the number of columns

// Step 3: Set up a counter variable with an initial value of 0
var counter = 0;

// Step 4: Create a for loop to construct each row of the table
for (var i = 0; i < numRows; i++) {
    // Set up a new temporary array (tempTable) to hold each row of data
    var tempTable = [];

    // Step 5: Nest a second loop within the first to count the columns
    for (var j = 0; j < numColumns; j++) {
        // Increment the counter to set the content and count the values of the cells
        counter++;

        // Push the counter value to the temporary array (representing a cell in the table)
        tempTable.push(counter);
    }

    // Push the temporary array (representing a row) to the main table array
    myTable.push(tempTable);
}

// Output the generated table to the console
console.log(myTable);
// Practice exercise 5.5
// Step 1: Create a grid array variable
var grid = [];

// Step 2: Set a value of 64 for the number of cells
var numCells = 64;

// Step 3: Set a counter to 0
var counter = 0;

// Step 4: Create a global variable to be used for the row array
var row = [];

// Step 5: Create a loop that will iterate up to the number of cells you want in the array, plus one
for (var i = 0; i <= numCells; i++) {

    // Step 6: Add an outer if statement to check if the counter is divisible by the number of columns
    if (counter % 8 === 0) {

        // Step 7: Inside the preceding if statement, add another if statement to check if the row is undefined
        if (row !== undefined) {
            // Add the row to the main grid array
            grid.push(row);
        }

        // Step 8: Clear the row array if the counter is divisible by 8
        if (counter % 8 === 0) {
            row = [];
        }
    }

    // Step 9: Increment the main counter by 1
    counter++;

    // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array
    var cellValue = counter;
    row.push(cellValue);

    // Step 11: Check if the value of the counter is equal to the total number of columns
    if (counter === 8) {
        // Add the current row to the grid
        grid.push(row);
    }
}

// Step 13: Output the grid into the console
console.log(grid);
// Practice exercise 5.6 
// Step 1: Create an empty array
var myArray = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (var i = 0; i < 10; i++) {
    myArray.push(i);
}

// Step 3: Log the array into the console
console.log("Array:", myArray);

// Step 4: Use the for loop to iterate through the array
var arrayLength = myArray.length;
console.log("Using for loop:");
for (var j = 0; j < arrayLength; j++) {
    console.log("Index", j, ":", myArray[j]);
}

// Step 5: Use the for...of loop to output the value into the console from the array
console.log("Using for...of loop:");
for (var value of myArray) {
    console.log("Value:", value);
}
// Practice exercise 5.7 
// Step 1: Create a simple object with three items
var myObject = {
    item1: "value1",
    item2: "value2",
    item3: "value3"
};

// Step 2: Using the for...in loop, get the properties' names and values from the object and output them into the console
console.log("Using for...in loop for object:");
for (var key in myObject) {
    console.log("Property:", key, "| Value:", myObject[key]);
}

// Step 3: Create an array containing the same three items
var myArray = ["value1", "value2", "value3"];

// Using the for loop to output the values from the array into the console
console.log("Using for loop for array:");
for (var i = 0; i < myArray.length; i++) {
    console.log("Value:", myArray[i]);
}
// Practice exercise 5.8 
// Step 1: Set up a string variable to use as output
var output = "";

// Step 2: Select a number to skip and set it as a variable
var skipNumber = 3;

// Step 3: Create a for loop that counts to 10
for (var i = 1; i <= 10; i++) {
    // Step 4: Add a condition to check if the value should be skipped
    if (i === skipNumber) {
        // Step 5: If the number is to be skipped, continue to the next number
        // Uncomment the following line to use "continue"
        // continue;

        // Uncomment the following line to use "break"
        // break;
    }

    // Step 6: Append the new count value to the end of the main output variable
    output += i + " ";
}

// Step 7: Output the main variable after the loop completes
console.log("Output:", output);

// Chapter project
//  Math multiplication table 
// Step 1: Set up a blank array to contain the final multiplication table
var multiplicationTable = [];

// Step 2: Set a value variable to specify how many values you want to multiply
var tableSize = 5; // You can change this to control the size of the table

// Step 3: Create an outer for loop to iterate through each row
for (var i = 1; i <= tableSize; i++) {
    // Create a temporary array to store the row values
    var row = [];

    // Step 4: Add an inner for loop for the column values
    for (var j = 1; j <= tableSize; j++) {
        // Push the multiplied row and column values to the temp array
        row.push(i * j);
    }

    // Step 5: Add the temporary row data to the main array of the final table
    multiplicationTable.push(row);
}

// Output the multiplication table
console.log(multiplicationTable);
// CHAPTER 6
// Practice exercise 6.1
function addNum(num1, num2) {
    return num1 + num2;
}
let variable1 = 5;
let variable2 = 5;
let result1 = addNum(variable1, variable2);
console.log(`Result of adding ${variable1} and ${variable2}: ${result1}`);
let variable3 = 7;
let variable4 = 3;
let result2 = addNum(variable3, variable4);
console.log(`Result of adding ${variable3} and ${variable4}: ${result2}`);

// Practice exercise 6.2

const descriptiveWords = ['creative', 'adventurous', 'energetic', 'thoughtful', 'joyful'];


function generateRandomGreeting() {
    const userName = prompt('Please enter your name:');
    if (userName) {

        const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
        const randomWord = descriptiveWords[randomIndex];
        console.log(`Hello, ${userName}! You are a ${randomWord} person.`);
    } else {
        console.log('You did not enter a name. Please try again.');
    }
}
generateRandomGreeting();
// Practice exercise 6.3
let number1 = 10;
let number2 = 5;
let operator = '+';
function calculate(num1, num2, operation = 'add') {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else {
        console.log('Invalid operator. Defaulting to addition.');
        return num1 + num2;
    }
}
console.log(`Result of ${number1} ${operator} ${number2}: ${calculate(number1, number2, operator)}`);
operator = '-';
console.log(`Result of ${number1} ${operator} ${number2}: ${calculate(number1, number2, operator)}`);
// Practice exercise 6.4

let resultsArray = [];


for (let i = 0; i < 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;
    function calculate(num1, num2) {
        return num1 + num2;
    }
    let response = calculate(value1, value2);
    resultsArray.push(response);
}
console.log(resultsArray);

// Practice exercise 6.5

// let value = '100';
(function () {
    let value = 'Local Value from IIFE';
    console.log('Local Value within IIFE:', value);
})();
let result = (function () {
    let value = 'Local Value from IIFE Expression';
    return value;
})();

console.log('Result from IIFE Expression:', result);
let anonymousFunction = function (newValue) {
    value = newValue;
    console.log('Value within Anonymous Function:', value);
};

anonymousFunction('New Value from Anonymous Function');
// Practice exercise 6.6
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        console.log("Current value:", n);
        return n * factorial(n - 1);
    }
}

// Invoke the function with an argument (e.g., 5)
const result3 = factorial(5);

// Output the final result
console.log("Factorial result:", result3);
// Practice exercise 6.7
// Function for countdown loop
function countdown(start) {
        // Output current value
        console.log("Countdown:", start);

        // Check if the value is less than 1
        if (start < 1) {
            return; // Exit the function if the condition is met
        } else {
            // Decrement the countdown
            start--;

            // Call the function recursively with the updated countdown value
            countdown(start);
        }
    }

// Start the countdown from a dynamic value of 10
countdown(10);

// Second countdown example
function countdownGreater(start) {
    // Check if the value is greater than 0
    if (start > 0) {
        // Output current value
        console.log("Countdown Greater:", start);

        // Decrement the countdown
        start--;

        // Call the function recursively with the updated countdown value
        return countdownGreater(start);
    } else {
        return; // Exit the function if the condition is no longer true
    }
}

// Start the second countdown from a dynamic value of 5
countdownGreater(5);
// Practice exercise 6.8
// Function expression
const printArgument = function (argument) {
    console.log("Function Expression:", argument);
};

// Pass an argument into the function expression
printArgument("Hello from Function Expression!");

// Function declaration
function printArgumentDeclaration(argument) {
    console.log("Function Declaration:", argument);
}

// Pass an argument into the function declaration
printArgumentDeclaration("Hello from Function Declaration!");
// Chapter projects
// Recursive function counting up to 10
function countUpRecursive(start) {
    console.log(start);
    if (start < 10) {
        countUpRecursive(start + 1);
    }
}

// Invoke the recursive function with different start numbers
countUpRecursive(5);
countUpRecursive(8);

// Function to output the value "one"
const outputOne = () => console.log("One");

// Function to output the value "two"
const outputTwo = () => console.log("Two");

// Function to output the value "three" and invoke the first two functions
const outputThreeAndInvoke = () => {
    console.log("Three");
    outputOne();
    outputTwo();
};

// Function to output the value "four" and invoke functions with setTimeout
const outputFourWithTimeout = () => {
    console.log("Four");
    setTimeout(() => {
        countUpRecursive(1); // Invoke the first function
    }, 0);
    setTimeout(() => {
        outputThreeAndInvoke(); // Invoke the third function
    }, 0);
};

// Invoke the fourth function
outputFourWithTimeout();

