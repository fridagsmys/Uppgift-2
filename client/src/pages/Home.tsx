import { PayBtn } from "../components/PayBtn";
import { ProductList } from "../components/ProductList";

export const Home = () => {

  const handleScroll1 = () => {
    window.scrollTo(0, 5000)
  }

  const handleScroll2 = () => {
    window.scrollTo(0, 4400)
  }
  
  const handleScroll3 = () => {
    window.scrollTo(0, 3000)
  }
  
  const handleScroll4 = () => {
    window.scrollTo(0, 1500)
  }

  return (
    <div className="main">
      <div className="hero-container">
        <div className="hero-image">
          <div className="hero-text">
            <p id="title">Summer is coming.</p>
          </div>
        </div>
      </div>
      <div className="news-section">
        <p>New Arrivals</p>
        <div className="slide-show">
          <div className="square" id="square-1" onClick={handleScroll1}></div>
          <div className="square" id="square-2" onClick={handleScroll2}></div>
          <div className="square" id="square-3" onClick={handleScroll3}></div>
          <div className="square" id="square-4" onClick={handleScroll4}></div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};
