const people = [
    { firstName: "John", lastName: "Doe", age: 22, city: "New York" },
    { firstName: "Alice", lastName: "Smith", age: 22, city: "Los Angeles" },
    { firstName: "Bob", lastName: "Johnson", age: 35, city: "Chicago" },
    { firstName: "Emily", lastName: "Williams", age: 28, city: "San Francisco" }
];


// Task 1: Print the full the of all the person in the object
const output = people.map((x)=>{
    return x.firstName + x.lastName;
})
// console.log(output);

// 2nd way
// const output = people.map((x)=>x.firstName + x.lastName);
// console.log(output);


// Tricky Question :- Your task is  print how many people having the given age

const ageFilter = people.reduce(function (acc,curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }

    else{
        acc[curr.age] = 1;
    }
    return acc;
},{})

// console.log(ageFilter);


// Task 3:- You have to return all the first name whose age is less than 30


// const ageNameFilter = people.filter((x)=>x.age < 30);
// console.log(ageNameFilter);



const ageNameFilter = people.filter((x)=>x.age < 30).map((y)=>y.firstName);
console.log(ageNameFilter);
