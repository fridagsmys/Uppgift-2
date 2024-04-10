export const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">HAVEN</div>
      <div className="buttons">
        <a>Home</a>
        <a>Products</a>
        <a>About</a>
        <div className="cart">
          <p>0</p>
          <div className="icon">
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};
