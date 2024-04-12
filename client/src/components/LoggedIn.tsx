import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";

export const LoggedIn = () => {
  const { userData } = useUserContext();

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(userData))
  // }, [])

  return (
    <div className="logged-in-container">
      <p>You are logged in and ready to go, {userData.name}!</p>
      <i>
        And you've got good taste. Please continue with your
        purchase!
      </i>
    </div>
  );
};
