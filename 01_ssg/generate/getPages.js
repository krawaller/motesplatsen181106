const getData = require("./getData");
const listMaker = require("./templates/list");
const postMaker = require("./templates/post");

module.exports = function getPages() {
  const posts = getData();
  let pages = [];
  pages.push(["index.html", listMaker(posts)]);
  for (let post of posts) {
    pages.push([post.slug + ".html", postMaker(post)]);
  }
  return pages;
};
