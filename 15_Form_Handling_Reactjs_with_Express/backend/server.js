import express from 'express'
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/',(req,res)=>{
    console.log(req.form); 
    res.send("hello")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})