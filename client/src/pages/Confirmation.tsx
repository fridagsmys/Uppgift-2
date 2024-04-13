import { useEffect, useState } from "react";

export const Confirmation = () => {
  const [verified, setVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!verified) {
      const verifySession = async () => {
        let sessionId;
        const dataFromLs = localStorage.getItem("sessionId");

        if (dataFromLs) {
          sessionId = JSON.parse(dataFromLs);
        }

        const response = await fetch(
          "http://localhost:3001/payments/verify_session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId }),
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setVerified(data.verified);
          setIsLoading(false);
        }
      };

      verifySession();
    }

    localStorage.removeItem("cart");
  }, [verified]);

  return (
    <div>
      {verified && !isLoading ? (
        <div className="confirm-main">
          <div className="confirm-hero">
            <div className="msg-section">
              <p id="confirm-header">Thank you for your purchase!</p>
              <div className="confirm-bread">
                <p>
                  Your order has been registrated. Your new furniture is soon on
                  its way! (but not really)
                </p>
                <p>
                  Once your order has been confirmed, a confirmation email with
                  order details will be sent to you.
                </p>
              </div>
              <button className="home-btn">
                <a href="/">Home</a>
              </button>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
