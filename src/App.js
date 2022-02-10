import React, { useState } from "react";
import Login from "./components/login/Login.component";

import "./App.css";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login></Login>;
  }

  return (
    <div className="App">
      <div>This is App</div>
    </div>
  );
}

export default App;
