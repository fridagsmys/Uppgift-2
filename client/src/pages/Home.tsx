export const Home = () => {

  const handlePay = async () => {
    const response = await fetch(
      "http://localhost:3001/payments/create_checkout_session",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    console.log(data);
  };

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
      <div className="payment-test">
        <button onClick={handlePay}>Pay</button>
      </div>
    </div>
  );
};
