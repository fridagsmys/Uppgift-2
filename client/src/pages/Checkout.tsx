import { useEffect, useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Cart } from "../components/Cart";
import { PayBtn } from "../components/PayBtn";
import axios from "axios";

export const Checkout = () => {
  const [toggleRegister, setToggleRegister] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(true);

  useEffect(() => {
    const authorize = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/auth/authorize",
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setNotLoggedIn(false);
      }
    };

    authorize();
  }, [])

  const handleToggle = () => {
    setToggleRegister(true);
    setShowLogin(false);
  };

  const handleSuccsess = () => {
    setNotLoggedIn(false)
  }

  return (
    <div className="checkout-main">
      <div className="checkout-container">
        <div className="account">
          {toggleRegister && <Register onSuccess={handleSuccsess}/>}
          {showLogin && (
            <>
              <Login onSuccess={handleSuccsess} />
              <p id="register-text" onClick={handleToggle}>
                New here? Click here to register!
              </p>
            </>
          )}
        </div>
        <div className="cart-info">
          <Cart />
          {notLoggedIn && (
            <div className="disabled"></div>
          )}
          <PayBtn />
        </div>
      </div>
    </div>
  );
};
