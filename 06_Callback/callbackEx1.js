const getCheese = (itRet) => {
    setTimeout(() => {
      let cheese = "🧀";
      console.log(" congo ,You got the cheese");
      itRet(cheese);
    }, 2000);
  };
  
  getCheese((cheese) => {
    console.log("You got the cheese", cheese);
  });





