import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 3000;

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server is running on port", port);
});
