import { PayBtn } from "../components/PayBtn";
import { ProductList } from "../components/ProductList";

export const Home = () => {

  return (
    <div className="main">
      <div className="hero-container">
        <div className="hero-image">
          <div className="hero-text">
            <h2>Summer is coming.</h2>
          </div>
        </div>
      </div>
      <div className="news-section">
        <p>New Arrivals</p>
        <div className="slide-show">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
      <PayBtn />
      <ProductList />
    </div>
  );
};
