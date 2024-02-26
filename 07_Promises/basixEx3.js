const getCheese = (()=>{
   return new Promise((res,rej)=>{
        setTimeout(()=>{
            const cheese = "🧀"
            rej(cheese)
        },2000)
    })
})

const bakeDough = ((cheese)=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            const dough = cheese+"🍩"
            res(dough)  
        },2000);
    })
})

getCheese()
    .then((cheese)=>{      
        console.log(cheese);
        
     return bakeDough((cheese)) 
    })
    .then((dough)=>{
        console.log(dough); 
    })
    .catch(()=>{
        console.log("Some error occured");
        
    })