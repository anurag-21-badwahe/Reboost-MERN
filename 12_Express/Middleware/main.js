const express = require("express");
const app = express();
const port = 3000;

//built in middleware
app.use(express.static("public"));

// Writing owm Middleware
app.use((req,res,next)=>{
  console.log("Middleware 1");
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
