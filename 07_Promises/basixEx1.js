const ticket = new Promise((res,rej)=>{
    const isBoarded = true;
    if(isBoarded){
        res("Flight is Boarded")
    }
    else{
        rej("Fight is not boarded")
    }
})

ticket
   .then((data)=>{
    console.log('Wooo',data);
    
   })
   .catch((data)=>{
    console.log("ohno",data);
    
   })