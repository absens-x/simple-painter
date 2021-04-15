import React from "react";

import Canvas from "../../components/Canvas/Canvas";
import SettingBar from "../../components/SettingBar/SettingBar";
import Toolbar from "../../components/Toolbar/Toolbar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
}

export default App;
