import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { cart } = useCart();

  // const [amount, setAmount] = useState<number[]>([]);

  // useEffect(() => {
  //   const currentCart = localStorage.getItem("cart");
  //   if(currentCart) {
  //     const parsedCart = JSON.parse(currentCart);
  //     console.log(parsedCart?.length)
  //     setAmount(parsedCart);
  //   }
  // }, []);

  return (
    <div className="container">
      <a className="logo" href="/">
        HAVEN
      </a>
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
