import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct, useCart } from "../context/CartContext";

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const {addToCart} = useCart()

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3001/products/all");
    setProducts(response.data);
    console.log(response.data);
  };

  return (
    <>
      <p id="products-header">All products</p>
      <div className="shop-section">
        {products?.map((product: IProduct) => (
          <div className="product-container" key={product.id}>
            <div className="img-container">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="info">
              <p id="name">{product.name}</p>
              <p id="price">{product.default_price.unit_amount / 100}kr</p>
            </div>
            <button className="add-btn" onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
