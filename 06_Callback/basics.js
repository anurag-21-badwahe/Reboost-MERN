function hello(){
    console.log("Hello");
}


function printHello(callBack){
console.log("Inside Print Function")
console.log(callBack);
    callBack(); //== hello();
}

console.log("Before Print Function")
printHello(hello);
