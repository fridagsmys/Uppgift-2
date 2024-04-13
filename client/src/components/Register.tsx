import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { LoggedIn } from "./LoggedIn";

interface ILogIn {
  onSuccess: () => void
}

export const Register = (props: ILogIn) => {
  const { updateData } = useUserContext();

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleRegister = async () => {
    if (confirmPassword === passwordInput) {
      const newUserInfo = {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      };
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        newUserInfo,
        {
          withCredentials: true,
        }
      );
      console.log("A new user has been registered:", response);

      const contextData = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
      };

      if (response.status === 201) {
        updateData(contextData);
        console.log('ContextData: Register', contextData)
        setShowForm(false);
        localStorage.setItem("user", JSON.stringify(contextData));
      }
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div className="login-container">
      {showForm ? (
        <>
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
        </>
      ) : (
        <LoggedIn />
      )}
    </div>
  );
};
