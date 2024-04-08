export const PayBtn = async () => {
    const response = await fetch('http://localhost:3001/payments/create_checkout_session')

  return (
    <div className="payment-test">
      <button>Pay</button>
    </div>
  );
};


