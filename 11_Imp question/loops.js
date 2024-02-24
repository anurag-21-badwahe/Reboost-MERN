// 1) for Loop:
// The for loop is used when you know how many times you want to execute the loop.
//  It consists of three parts: initialization, condition, and iteration.

/*
        for (initialization; condition; iteration) {
            code block to be executed
        }
*/


// 2)
// while Loop:
// The while loop is used when you don't know how many times you want to execute the loop, 
// but you know the condition under which the loop should continue.


/*
    while (condition) {
        // code block to be executed
    }
*/



// 3)do...while Loop:
// The do...while loop is similar to the while loop, but the condition is evaluated after executing the block of code. 
// This means that the block of code inside the loop will always execute at least once.

/*
        do {
            // code block to be executed
        } while (condition);
*/

// 4)JavaScript for in loop is used to iterate over the properties of an object. JavaScript 
// for in loop iterates only over those keys of an object which have their enumerable property set to “true”.

// Enumerable Property -> "Enumerable properties in JavaScript are object characteristics that can be looped over, 
// Yes, arrays in JavaScript are enumerable
const person = {
    name: 'John',
    age: 30
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// 4)for...of loop:

// Purpose: Iterates over iterable values, such as arrays, strings, maps, sets, etc.
// Example:

const arr = [1, 2, 3];

for (let value of arr) {
    console.log(value);
}

// let a = prompt("number") 
// we cam not use this in node js
//  prompt() is a method provided by web browsers to interact with users via pop-up dialog boxes.
// console.log(a);
    
   
// Important
// for...in loop, it iterates over the keys (a, b, c)
//  of the obj object, logging each key to the console. 
// This loop is specifically designed for iterating over object properties.

// In the example for for...of loop, it iterates over the values 
// (1, 2, 3) of the arr array, logging each value to the console. 
// This loop is tailored for iterating over iterable values, such as arrays, strings, etc.