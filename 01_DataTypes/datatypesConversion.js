// let num = 123;
// let strNum = String(num); // Converts number to string


// let strNum = "123";
// let num = +strNum; // Converts string to number

// let strNum = "123";
// let num = parseInt(strNum); // Converts string to integer

// let val = "true";
// let boolVal = Boolean(val); // Converts string to boolean


// let num = 10;
// let strNum = "Number is " + num; // Converts number to string implicitly


// let arr = [1, 2, 3];
// let strArr = arr.join(','); // Converts array to string

let strArr = "1,2,3";
let newArr = strArr.split(','); // Converts string to array
console.log(newArr);
console.log(typeof(newArr)); //object
// arrays are actually a specific type of object in JavaScript.



// How to differntiate array and object?
console.log(Array.isArray(newArr)); // Output: true


const obj = {
 "name" : "Anurag",
}
obj.age = "20"
console.log(obj);

console.log(Array.isArray(obj)); // Output: false








