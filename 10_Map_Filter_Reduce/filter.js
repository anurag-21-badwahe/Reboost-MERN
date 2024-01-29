const arr = [4,2,6,3,6,2,7,82,6,36,9,11];

const evenArr = arr.filter((x)=>{
    return x % 2 === 0;
})
const oddArr = arr.filter((x)=>{
    return x % 2;
})

console.log("Even number in the array are:-",evenArr);
console.log("Odd number in the array are:-",oddArr);
