const express = require("express");
const data = require("./demoData.json");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  return res.end("Welcome to the server 8000");
});

app.get("/title", (req, res) => {
  const html = `<ul>
  ${data
    .map((ques) => {
      return `<li>${ques.title}</li>`;
    })
    .join("")}
  </ul>`;
  res.send(html);
});

app.get("/api/title", (req, res) => {
  return res.json(data);
});

app.get("/title", (req, res) => {
  return res.json(data);
});

app.get("/api/title/:id", (req, res) => {
  const id = req.params.id;
  const title = title.find((title) => title.id === "Reverse the array");
  return res.json(title);
});

app.listen(port, () => {
  console.log(`Server is running successfully of Port : ${port}`);
});
