const express = require('express')
const app = express();
const port = 3000;


const apiKey = "A85VAU7FHTPN5VE3"
app.get('/data',(req,res)=>{
    fetch(`https://api.thingspeak.com/channels/2460362/fields/1.json?api_key=${apiKey}&results=5`)
    .then(respone=>response.json())
    .then(data=>{
        const latestFeed = data.feeds[data.feeds.length - 1];
        const latestField1 = latestFeed.field1;
        res.json({ latestField1 });
    })
    .catch(error => {
        console.log('Error fetching data from Thingspeak:', error);
        res.status(500).json({ error: 'Internal server error' });
    });   
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
    
})