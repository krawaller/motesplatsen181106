module.exports = function(title, content) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link rel="stylesheet" href="styles.css">
  <script src="https://www.gstatic.com/firebasejs/5.5.7/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.5.7/firebase-database.js"></script>
  <script src="scripts/init.js"></script>
</head>
<body>
  <div>
    <h1>My awesome site</h1>
    <hr/>
    <h2>${title}</h2>
    <main>${content}</main>
  </div>
</body>
</html>`;
};
