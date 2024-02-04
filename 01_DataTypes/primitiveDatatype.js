// THERE ARE 7 PRIMITIVE DATATYPES IN JS
//TRICK :- NNBBSSU

let a = 7;
let b = null;
let c = 123422222222222222222222222222222222222n;
let d = true;
let e = Symbol("I am Symbol");
let f = undefined;

console.log(a,b,c,d,e,f);
console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(f));



// Ques : WHY TYPE OF NULL IS OBJECT ?
//ANS :  It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object.


//Creation of object

let obj = {
    "name" : "Anurag",
    "job role" : "SOFTWARE DEVELOPER",
     Degree : "B TECH"
}

console.log(obj);
console.log(obj.Degree);