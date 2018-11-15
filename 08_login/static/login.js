firebase.auth().onAuthStateChanged(redrawLogin);

var loggedInSpan = document.getElementById("loggedIn");
var loggedOutSpan = document.getElementById("loggedOut");
var userNameSpan = document.getElementById("userName");

function redrawLogin(user) {
  if (user) {
    loggedInSpan.style = "display:inline-block";
    loggedOutSpan.style = "display:none";
    userNameSpan.innerText = user.displayName;
  } else {
    loggedInSpan.style = "display:none";
    loggedOutSpan.style = "display:inline-block";
  }
}

var githubProvider = new firebase.auth.GithubAuthProvider();

document.getElementById("logInBtn").addEventListener("click", function() {
  firebase.auth().signInWithPopup(githubProvider);
});

document.getElementById("logOutBtn").addEventListener("click", function() {
  firebase.auth().signOut();
});
