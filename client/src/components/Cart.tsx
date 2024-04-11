import { useEffect, useState } from "react";
import { ICartItem, IProduct, useCart } from "../context/CartContext";

export const Cart = () => {
  useCart();

  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    const LsData = localStorage.getItem("cart");
    if (LsData) {
      setCartItems(JSON.parse(LsData));
      console.log(JSON.parse(LsData));
    } else {
      console.log("Empty local storage");
    }
  }, []);

  return (
    <div className="cart-container">
      <p id="cart-header">Your cart</p>
      <div className="item-list">
        {cartItems?.map((item: ICartItem) => (
          <div className="unit" key={item.product.id}>
            <p>{item.product.name}</p>
            <div className="numbers">
              <i>{item.product.default_price.unit_amount / 100}kr</i>
              <p>x {item.quantity}</p>
              <button id="delete-btn"></button>
            </div>
          </div>
        ))}
      </div>
      <p id="total">Total:</p>
    </div>
  );
};
