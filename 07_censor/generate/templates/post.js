const master = require("./master");

module.exports = function(post) {
  const html =
    post.html +
    `
    <hr/>
    <h3>Kommentarer</h3>
    <form id="newCommentForm">
      <input placeholder="Skriv en kommentar">
    </form>
    <ul id="comments">...laddar...</ul>
    <script>window.postId = "${post.slug}";</script>
    <script src="comments.js"></script>
  `;
  return master(post.title, html);
};
