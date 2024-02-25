// Write a program using loop to get student and marks individually

let obj = [
    { "John": 80 },
    { "John": 80 },
    { "John": 80 },
    { "John": 80 },
    { "John": 80 },
    { "John": 80 },
    { "John": 80 },
    { "John": 80 },
    { "John": 80 },
    { "John": 80 }
]

// for(let i = 0; i < obj.length; i++){
//     let data = obj[i];
//     for(let j in data){
//         console.log(data[j]);
//         // console.log(j);
        
//     }
// }


obj.forEach((data,index)=>{
//    console.log(data);
//    console.log(index);
console.log(Object.values(data)[0]);
console.log(Object.values(data));


   
})