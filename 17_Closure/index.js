// A function bundled with its lexical environment then it is called closure

function a(){
    let a = 6;
    function b(){
        console.log(a);        
    }
    b();
    return b;
}

console.log(a());
