export const PayBtn = () => {
  const handlePay = async () => {
    const response = await fetch(
      "http://localhost:3001/payments/create_checkout_session",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify([
          {
            product: "price_1P2EzRP8wgatYK4XSYXIWcwK",
            quantity: 2,
          },
          {
            product: "price_1P2Ey6P8wgatYK4XHHFe73fp",
            quantity: 1,
          },
        ]),
      }
    );
    const data = await response.json();
    window.location = data.url;
  };

  return (
    <div className="payment-test">
      <button onClick={handlePay}>Pay</button>
    </div>
  );
};
