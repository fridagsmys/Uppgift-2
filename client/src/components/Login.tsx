import axios from "axios";
import { ChangeEvent, useState } from "react";

export const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //   console.log(emailInput)

  const handleLogin = async () => {
    const user = {
        email: emailInput,
        password: passwordInput
    }
    const response = await axios.post('http://localhost:3001/api/auth/login', user)
    console.log(response)
  };

  return (
    <div className="login-container">
      <p>Login</p>
      <div className="form">
        <input
          type="text"
          placeholder="Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};
