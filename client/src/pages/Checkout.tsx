// Kunden ska kunna logga in eller registrera sig
// registrerar kunden sig ska en användare i stripe också skapas

export const Checkout = () => {
  return (
    <div className="checkout-main">
      <div className="checkout-container">
        <div className="account">
            <div className="login-container">
                <p>Login</p>
                <div className="form">
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                </div>
                    <button>Log in</button>
                <p id="register-text">New here? Click here to register!</p>
            </div>
        </div>
        <div className="cart-info">
            <div className="cart-container">
                <p>Your cart</p>
            </div>
            <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}
