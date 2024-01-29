// Write a Program using map which double,triple and convert the num to binary the value of arr using different method

let arr = [4,6,4,2,7,2,7,89,2];

let twiceval = arr.map((x)=>{
    return x*2;
})

console.log(twiceval);

function triple(x){
   return x*3;
}

let thriceval = arr.map(triple);
console.log(thriceval);


let binary = arr.map(function toBinary(x){
    return x.toString(2);
})

console.log(binary);
