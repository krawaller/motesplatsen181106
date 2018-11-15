const master = require("./master");

module.exports = function(posts) {
  const items = posts.map(templatePostSummary).join("\n");
  return master("The posts so far", "<ul>" + items + "</ul>");
};

function templatePostSummary(post) {
  return `
    <li>
      <a href="${post.slug}.html">
        ${post.title}
      </a>
      <p>${post.summary}</p>
    </li>
  `;
}
