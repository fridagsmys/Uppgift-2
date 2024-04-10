import axios from "axios";
import { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getItems = async () => {
    const response = await axios.get("http://localhost:3001/products/all");
    setProducts(response.data);
    console.log(response.data);
  };

  // useEffect(() => {
  //   getItems();
  // }, []);

  return (
    <div className="all-products">
      <button onClick={getItems}>Products</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="img-container">
              <img src={product.images[0]} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
