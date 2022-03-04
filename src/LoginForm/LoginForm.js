import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

  export const LoginForm = () => {
    console.log('Login form rendered');
    const user = {username: 'Admin', password: 'Admin'};
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (event) => {
      if (username === user.username && password === user.password) {
        navigate("/Clothing/Admin");
      } else {
        navigate("/Clothing/Visit");
      }
    };

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        disabled={username.length === 0 || password.length === 0}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );

  return form;
};