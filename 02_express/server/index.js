const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "../static")));

const getPages = require("../generate/getPages");
const pages = getPages();

pages.forEach(([fileName, content]) => {
  app.get("/" + fileName, (req, res) => res.send(content));
  if (fileName === "index.html") {
    app.get("/", (req, res) => res.send(content));
  }
});

app.listen(8888);
console.log("Server available at localhost:8888!");
