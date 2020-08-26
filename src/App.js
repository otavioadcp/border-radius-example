import React from "react";
import "./App.css";
import BorderRadius from "./content/BorderRadius";
function App() {
  return (
    <div className="AppContainer">
      <div className="titleContainer">
        <span className="Title">Border Radius Example</span>
        <p className="subTitle">
          This is just an example of using the 'border-radius' property!
        </p>
      </div>
      <BorderRadius />
    </div>
  );
}

export default App;
