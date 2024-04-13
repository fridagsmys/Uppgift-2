import { useEffect, useState } from "react";

export const LoggedIn = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    const user = localStorage.getItem("user");
    if(user) {
      const parsedUser = JSON.parse(user)
      setName(parsedUser.name)
    }
  }, [])
  

  return (
    <div className="logged-in-container">
      <p>You are logged in and ready to go, {name}!</p>
      <i>And you've got good taste. Please continue with your purchase!</i>
    </div>
  );
};
