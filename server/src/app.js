const express = require("express");

const app = express();

app.use(express.static(__dirname + "/../build"))

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("server is running");
});