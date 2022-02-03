import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login.component";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login></Login>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HELLO WORLD</p>
      </header>
    </div>
  );
}

export default App;
