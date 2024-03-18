const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/',(req,res)=>{ // app.get,app.post,app.put.....(path,handler)
    res.send("Hello world to express js")
})
app.get('/contact',(req,res)=>{ // app.get,app.post,app.put.....(path,handler)
    res.send("Contact page")
})

app.get('/userId/:slug',(req,res)=>{ // app.get,app.post,app.put.....(path,handler)
    res.send(`Hello ${req.params.slug}`)
    // console.log(req.query)
    console.log(req)
    console.log("Hello")

    // request.params and request query for this url => http://localhost:3000/userId/anurag?softwareEngineer%20=%20microsoft
    console.log(req.params)
    console.log(req.query)
    //req.params is an object
})

app.post('/', (req, res) => {
    res.send('Hello World Post')
    console.log("This is post request")
  })
  
app.listen(port,()=>{
    console.log(`Example app is listening on port ${port}`);
})
