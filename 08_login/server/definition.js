const path = require("path");
const express = require("express");
const app = express();

const getPages = require("../generate/getPages");
const pages = getPages();

pages.forEach(([fileName, content]) => {
  app.get("/" + fileName, (req, res) => res.send(content));
  if (fileName === "index.html") {
    app.get("/", (req, res) => res.send(content));
  }
});

module.exports = app;
