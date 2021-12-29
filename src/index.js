import { AppsSharp } from "@material-ui/icons";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
App.listen(port, function () {
  console.log("Server has started successfully");
});
