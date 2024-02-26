function getCheese(){
    return new Promise((resolve,reject)=>{
        const cheese = "🧀"
        resolve(cheese)
    })
}


getCheese()
    .then((cheese)=>{
        console.log(cheese); 
    })
     
     