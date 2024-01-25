
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
      console.log("Finally i got the dough ",dough)
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
     makeDough(cheese,(dough)=>{
         bakePizza(dough,(pizza)=>{
             console.log("here is pizza",pizza)
         });
     });
 });
