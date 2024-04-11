import axios from "axios";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { LoggedIn } from "./LoggedIn";

export const Login = () => {
  const { updateData } = useUserContext();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [showForm, setShowForm] = useState<boolean>(true);

  const handleLogin = async () => {
    const user = {
      email: emailInput,
      password: passwordInput,
    };
    const response = await axios.post(
      "http://localhost:3001/api/auth/login",
      user
    );
    console.log(response);

    const contextData = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
    };

    updateData(contextData);

    setShowForm(false);
  };

  return (
    <div className="login-container">
      {showForm ? (
        <>
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
        </>
      ) : (
        <LoggedIn />
      )}
    </div>
  );
};
