const fs = require("fs-extra");
const path = require("path");

const outputPath = path.join(__dirname, "../output");
const staticPath = path.join(__dirname, "../static");

fs.removeSync(outputPath);
fs.copySync(staticPath, outputPath);

const getPages = require("./getPages");
const pages = getPages();

pages.forEach(([fileName, content]) =>
  fs.writeFileSync(path.join(outputPath, fileName), content)
);

console.log("Site generated in /output");
