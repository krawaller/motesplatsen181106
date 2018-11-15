var database = firebase.database();

database.ref("/comments/" + window.postId).on("value", function(snapshot) {
  var html = "";
  var comments = snapshot.val(); // object with generated keys, each value is object with { name, content }
  if (comments === null) {
    html = "inga kommentarer än :(";
  } else {
    for (var key in comments) {
      var comment = comments[key];
      html =
        "<li><strong>" +
        comment.name +
        ":</strong> " +
        comment.content +
        "</li>" +
        html;
    }
  }
  document.getElementById("comments").innerHTML = html;
});
