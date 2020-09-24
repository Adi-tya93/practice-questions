// init project
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const mcache = require("memory-cache");

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/joke", (req, res) => {
  //let joke = fetch("https://sv443.net/jokeapi/v2/joke/Any?format=json");
  fetch("https://sv443.net/jokeapi/v2/joke/Any?format=json")
    .then((res) => res.json())
    .then((json) => {
      let message;
      if (mcache.get(json.id)) {
        fetch("https://nnqyt.sse.codesandbox.io/joke")
          .then((res) => res.json())
          .then((json) => {
            res.json(json + "repeated refreshed");
          });
      } else {
        mcache.put(json.id, "random");
        if (json.type === "single") {
          message = "ID: " + json.id + " Joke: " + json.joke;
        } else {
          message =
            "ID: " +
            json.id +
            " Setup: " +
            json.setup +
            " Delivery: " +
            json.delivery;
        }
        res.json(message + "mcahce:" + mcache.keys());
      }
    })
    .catch((err) => res.send(err));
});

// let me try writing a route
// Listen on port 8080
const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
