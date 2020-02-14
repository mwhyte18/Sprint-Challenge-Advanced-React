import React from "react";
import Players from "./components/Players";
import Switch from "./components/Switch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Women's World Cup Player List! </h1>
      <Switch />
      <Players />
    </div>
  );
}

export default App;
