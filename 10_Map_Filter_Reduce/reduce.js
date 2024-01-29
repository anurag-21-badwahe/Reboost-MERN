const arr = [2, 4, 6, 3, 7, 8];

// First your target is to find sum of all number in the array

let sum = 0; 
const output = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log("output using normal iterator method = >",output(arr));



const outputUsingReduce = arr.reduce(function (acc,curr){
    acc = acc + curr;
    return acc;
},0)

console.log("output using reduce function ->",outputUsingReduce);
