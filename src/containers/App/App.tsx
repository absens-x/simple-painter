import React from "react";

import Canvas from "../../components/Canvas/Canvas";
import Settings from "../../components/Settings/Settings";
import Toolbar from "../../components/Toolbar/Toolbar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Settings />
      <Canvas />
    </div>
  );
}

export default App;
