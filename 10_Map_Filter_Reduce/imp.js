// Here your task is to do the example third of map_filter_reduce.js file using reduce function

const people = [
  { firstName: "John", lastName: "Doe", age: 22, city: "New York" },
  { firstName: "Alice", lastName: "Smith", age: 22, city: "Los Angeles" },
  { firstName: "Bob", lastName: "Johnson", age: 35, city: "Chicago" },
  { firstName: "Emily", lastName: "Williams", age: 28, city: "San Francisco" },
];

const output = people.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);
