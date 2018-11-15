const reader = require("./getData");
const listMaker = require("./templates/list");
const postMaker = require("./templates/post");

module.exports = function getPages() {
  const posts = reader();
  let pages = [];
  pages.push(["index.html", listMaker(posts)]);
  posts.forEach(post => pages.push([post.slug + ".html", postMaker(post)]));
  return pages;
};
