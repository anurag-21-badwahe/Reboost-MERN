const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
//   console.log("New request Received", req);

  const log = `${Date.now()} : New Request Received\n User request at tha ${req.url}\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch(req.url){
        case '/' : res.end("Home page")
        case '/contact': res.end("Contact Page")
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server Started");
});
