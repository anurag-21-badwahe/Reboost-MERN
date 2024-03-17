const fs = require("fs");


// The below are synchronous call
fs.writeFileSync('./test.tsx',"Hello Everyone, This file is created using fs module")
fs.unlinkSync('./test.tsx') // This command will delete the file "test.tsx"
fs.writeFileSync('./test.txt',"Hello Everyone, This file is created using fs module")
const result = fs.readFileSync('./contact.txt',"utf-8")
console.log(result);




// The below are synchronous call.Sy
fs.writeFile("./asyc.txt","This is file which created using fs modules asynchronously",(err) =>{})
fs.readFile('./contact.txt',"utf-8",(err,res)=>{
    if(err){
        console.log('This is real error');
    }
    else{
        console.log(res);
        
    }
})