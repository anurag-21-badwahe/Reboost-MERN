const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/',(req,res)=>{ // app.get,app.post,app.put.....(path,handler)
    res.send("Hello world to express js")
})

app.post('/', (req, res) => {
    console.log("This is post request")
    res.send('Hello World Post')
  })
  
app.listen(port,()=>{
    console.log(`Example app is listening on port ${port}`);
})
