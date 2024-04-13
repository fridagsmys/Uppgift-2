import { useEffect, useState } from "react";
import { ICartItem, useCart } from "../context/CartContext";

export const Cart = () => {
  useCart();

  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [cartEmpty, setCartEmpty] = useState<boolean>(false);

  useEffect(() => {
    const LsData = localStorage.getItem("cart");
    if (LsData) {
      const parsedData = JSON.parse(LsData);
      setCartItems(parsedData);
      TotalPrice(parsedData);
    } else {
      console.log("Empty local storage");
      setCartEmpty(true);
    }
  }, []);

  const TotalPrice = (items: ICartItem[]) => {
    let total = 0;
    items.forEach((item) => {
      total += item.product.default_price.unit_amount * item.quantity;
    });
    setTotalPrice(total);
  };

  const handleDelete = (itemToDelete: ICartItem) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.id !== itemToDelete.product.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    console.log(itemToDelete.product.name, "was removed from cart");

    TotalPrice(updatedCartItems);
  };

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
              <button id="delete-btn" onClick={() => handleDelete(item)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartEmpty && <p id="empty-text">Your cart is empty</p>}
      <p id="total">Total: {totalPrice / 100}kr</p>
    </div>
  );
};
