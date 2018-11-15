const fs = require("fs-extra");
const path = require("path");

const output = path.join(__dirname, "../output");

fs.removeSync(output);
fs.copySync(path.join(__dirname, "../static"), output);

const getPages = require("./getPages");
const pages = getPages();

pages.forEach(([fileName, content]) =>
  fs.writeFileSync(path.join(output, fileName), content)
);

console.log("Site generated in /output");
