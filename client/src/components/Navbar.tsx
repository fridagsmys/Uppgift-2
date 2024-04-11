import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { cart } = useCart();

  return (
    <div className="container">
      <div className="logo">HAVEN</div>
      <div className="buttons">
        <a href="/">Home</a>
        <a href="/checkout" className="cart">
          <p>{cart.length}</p>
          <div className="icon">
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </a>
      </div>
    </div>
  );
};
