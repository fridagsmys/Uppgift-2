import { useCart } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";

export const PayBtn = () => {
  const { cart } = useCart();
  const {userData} = useUserContext()

  const infoToSend = {
    customerId: userData.id,
    lineItems: cart
  }

  const handlePay = async () => {
    const response = await fetch(
      "http://localhost:3001/payments/create_checkout_session",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(infoToSend),
      }
    );
    const data = await response.json();
    localStorage.setItem("sessionId", JSON.stringify(data.sessionId));
    window.location = data.url;
  };

  return <button onClick={handlePay}>Proceed to checkout</button>;
};
