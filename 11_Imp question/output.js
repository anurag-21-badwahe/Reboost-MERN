

let a = "Anu rag bad wahe";

a = a.split(" ").join("-");
console.log(a);


// 2nd trick
// let result = "";

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === " ") {
//         result += "-";
//     } else {
//         result += a[i];
//     }
// }

// console.log(result);


/*--------------Find the output----------------*/
console.log("1");

setTimeout(() => { 
    console.log("2"); 
}, 0);

setTimeout(() => { 
    console.log("3"); 
    Promise.resolve()
    .then(() => console.log("4"));
}, 0);

Promise.resolve().then(() => { 
    console.log("5"); 
    setTimeout(() => console.log("6"), 0); 
});

Promise.resolve().then(() => { 
    console.log("7"); 
});

console.log("8");


