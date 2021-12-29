import React from "react";
import Navigate from "./Navigate";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Work from "./Work";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <body>
        <Navigate />
        <Introduction />
        <Work />
        <Contact />
        <Footer />
      </body>
    </div>
  );
}

export default App;
