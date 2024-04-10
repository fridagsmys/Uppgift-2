// Kunden ska kunna logga in eller registrera sig
// registrerar kunden sig ska en användare i stripe också skapas

import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export const Checkout = () => {
  const [toggleRegister, setToggleRegister] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(true);

  const handleToggle = () => {
    setToggleRegister(true);
    setShowLogin(false);
  };

  return (
    <div className="checkout-main">
      <div className="checkout-container">
        <div className="account">
          {toggleRegister && <Register />}
          {showLogin && (
            <>
              <Login />
              <p id="register-text" onClick={handleToggle}>
                New here? Click here to register!
              </p>
            </>
          )}
        </div>
        <div className="cart-info">
          <div className="cart-container">
            <p>Your cart</p>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};
