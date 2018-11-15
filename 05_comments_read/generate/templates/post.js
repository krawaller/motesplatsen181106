const master = require("./master");

module.exports = function(post) {
  const html =
    post.html +
    `
    <hr/>
    <h3>Kommentarer</h3>
    <ul id="comments">...laddar...</ul>
    <script>window.postId = "${post.slug}";</script>
    <script src="scripts/comments.js"></script>
  `;
  return master(post.title, html);
};
