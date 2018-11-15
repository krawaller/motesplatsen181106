const fs = require("fs-extra");
const fm = require("front-matter");
const path = require("path");
const marked = require("marked");

const sourcePath = path.join(__dirname, "../posts");

module.exports = function() {
  return fs
    .readdirSync(sourcePath)
    .filter(name => name !== ".DS_Store")
    .map(name => readFile(path.join(sourcePath, name)));
};

function readFile(filePath) {
  const fileContent = fs.readFileSync(filePath).toString();
  const parsedFM = fm(fileContent);
  return {
    ...parsedFM.attributes,
    html: marked(parsedFM.body)
  };
}
