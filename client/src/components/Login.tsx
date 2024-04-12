import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { LoggedIn } from "./LoggedIn";

export const Login = () => {
  const { updateData } = useUserContext();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [showForm, setShowForm] = useState<boolean>(true);

  useEffect(() => {
    const authorize = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/auth/authorize",
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setShowForm(false);
      }
    };

    authorize();
  }, []);

  const handleLogin = async () => {
    const user = {
      email: emailInput,
      password: passwordInput,
    };
    const response = await axios.post(
      "http://localhost:3001/api/auth/login",
      user,
      {
        withCredentials: true,
      }
    );
    console.log(response);

    const contextData = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
    };

    if (response.status === 200) {
      updateData(contextData);
      setShowForm(false);
      localStorage.setItem("user", JSON.stringify(contextData));
    }
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
