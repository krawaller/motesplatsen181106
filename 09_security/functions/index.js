"use strict";

const functions = require("firebase-functions");
const Filter = require("bad-words");
const censor = new Filter();

exports.censor = functions.database
  .ref("/comments/{postId}/{commentId}")
  .onWrite(change => {
    const message = change.after.val();

    if (message && !message.censored) {
      const censored = censor.clean(message.content || "");
      console.log(
        message.content === censored ? "Message looked ok" : "Censored message!"
      );

      return change.after.ref.update(
        Object.assign({}, message, {
          content: censored,
          checked: true,
          censored: message.content !== censored
        })
      );
    }
    return null;
  });
