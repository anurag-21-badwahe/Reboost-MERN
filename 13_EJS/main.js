const express = require("express");
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.get("/", (req, res) => {
  const siteName = "Being Developer";
  const searchText = "Search Name";
  const arr = [1,2,57,7]
  res.render("index", { siteName : siteName , searchText : searchText ,arr});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
