const master = require("./master");

module.exports = function(post) {
  return master(post.title, post.html);
};
