import axios from "axios";
import { useState } from "react";

export const Register = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (confirmPassword === confirmPassword) {
      const newUserInfo = {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      };
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        newUserInfo
      );
      console.log("A new user has been registered");
    } else {
      console.log("Registration failed");
    }

    // Visa att användaren är inloggad.
    
  };

  return (
    <div className="login-container">
      <p>Register</p>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};