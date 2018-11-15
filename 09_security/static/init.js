firebase.initializeApp({
  apiKey: "AIzaSyA3KMSb3I3ipwhdmt8hjNiE_Hoqhl8EAb4",
  authDomain: "ssg-exercise.firebaseapp.com",
  databaseURL: "https://ssg-exercise.firebaseio.com",
  projectId: "ssg-exercise"
});

firebase.auth().onAuthStateChanged(function(user) {
  window.user = user;
  console.log("Auth state changed", user);
});
