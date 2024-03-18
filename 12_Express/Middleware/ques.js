const express = require("express");
const app = express();
const port = 3000;

//built in middleware
app.use(express.static("public"));

// <----- THE QUES IS WHAT WILL HAPPEN IF WE SEND THE RESPOSE IN THE MIDDLEWARE---->

// Writing owm Middleware
app.use((req,res,next)=>{
    res.send("Hello");
  next()  
})
app.use((req,res,next)=>{
  console.log("Middleware 2");
  next()
})

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// <---- IF WE SEND OUR RESPONSE IN THE MIDDLEWARE THEN THE WORKFLOW WILL break BECAUSE IT ALREADY SENT THE RESPOSE---->
