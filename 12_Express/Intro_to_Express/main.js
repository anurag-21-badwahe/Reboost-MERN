const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{ // app.get,app.post,app.put.....(path,handler)
    res.send("Hello world to express js")
})
app.get('/contact',(req,res)=>{ // app.get,app.post,app.put.....(path,handler)
    res.send("Contact page")
})
app.get('/userId/:slug',(req,res)=>{ // app.get,app.post,app.put.....(path,handler)
    // res.send(`Hello ${req.params.slug}`)
    console.log(req.params)
    //req.params is an object
})

app.listen(port,()=>{
    console.log(`Example app is listening on port ${port}`);
})
