let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(a) + parseInt(b);

try {
  console.log("The sum is ", sum);
} catch (error) {
  console.log("Error aa gaya bhai");
} finally {
  console.log("This can be outside the finally block as well");
}
// console.log("This can be outside the finally block as well");

// Here in above example finally is not making any sense because if we not write finally block istead of we can use line 17 it will make the same sence so where we use finally see the next file (finally.js ) 0r harry bhai video