import "./App.css";
import React, { useState } from "react";
import { LoginForm } from "./LoginForm/LoginForm";

export function App() {
  console.log("App rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
}

