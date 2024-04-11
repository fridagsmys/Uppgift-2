import { useUserContext } from "../context/UserContext";

export const LoggedIn = () => {
  const { userData } = useUserContext();

  return (
    <div className="logged-in-container">
      <p>Hello {userData.name}!</p>
      <i>
        You've got good taste, just a few more steps. Please continue with your
        purchase!
      </i>
    </div>
  );
};
