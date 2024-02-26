
//Callback Hell

function getCheese(callback){
    setTimeout(function(){
     const cheese = "🧀";
     console.log("Finally i got the cheese",cheese)
     callback(cheese); // it well return chess after 2000ms if we try to returnchess without callback(it can be of any name) function then we get undefined due to synchronous programing
    },2000)
 };

 function makeDough(cheese,callback){
     setTimeout(function(){
      const dough = cheese + "🫓";
      console.log("Finally i got the dough ",dou
      )
      callback(dough);
     },2000)
  };

  function bakePizza(dough,callback){
     setTimeout(function(){
      const pizza = dough+"🍕";
      console.log("Finally i got the pizza ",pizza)
      callback(pizza);
     },2000)
  };

 getCheese((cheese)=>{ 
     makeDough(cheese,(dough)=>{ // here dough is function ,passing as a parameter
         bakePizza(dough,(pizza)=>{
             console.log("here is pizza",pizza)
         });
     });
 });


// const getCheese = ((callback)=>{
//     setTimeout(()=>{
//         let cheese = "🧀"
//         console.log('Congo you got the cheese',cheese);    
//         console.log(callback);    
//         // callback(cheese)     
//         // console.log(callback(cheese));
           
//     },1000)
// })
// const getDough = ((cheese,callback)=>{
//     setTimeout(()=>{
//         let dough = "🍩"
//         console.log('Congo you got the dough and cheese',dough + cheese);        
//         callback(dough)        
//     },1000)
// })
// const getPizza = ((cheese,dough,callback)=>{
//     setTimeout(()=>{
//         let pizza = "🍕"
//         console.log('Congo you got the cheese',cheese+dough+pizza);        
//         callback(pizza)        
//     },1000)
// })



// getCheese((cheese)=>{
//      console.log(cheese);
//     getDough(cheese,(dough)=>{
//         getPizza(cheese,dough,(pizza)=>{
//             console.log(`Congo we got ${cheese + dough + pizza}`);
            
//         })
//     })
// })



// //   getCheese((cheese)=>{
// //          makeDough(cheese,(dough)=>{ // here dough is function passing as a parameter
// //              bakePizza(dough,(pizza)=>{
// //                  console.log("here is pizza",pizza)
// //              });
// //          });
// //      });