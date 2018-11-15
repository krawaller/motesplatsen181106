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
  <script src="https://www.gstatic.com/firebasejs/5.5.7/firebase-auth.js"></script>
  <script src="init.js"></script>
</head>
<body>
  <div>
    <h1>
      My awesome site
      <span id="loggedIn" style="display: none;">Logged in as <span id="userName"></span> <button id="logOutBtn">Log out</button></span>
      <span id="loggedOut"><button id="logInBtn">Log in</button></span>
    </h1>
    <hr/>
    <h2>${title}</h2>
    <main>${content}</main>
  </div>
  <script src="login.js"></script>
</body>
</html>`;
};
