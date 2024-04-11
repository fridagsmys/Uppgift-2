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

        if (response.ok) {
          setVerified(data.verified);
          setIsLoading(false);
        }
      };
      
      localStorage.removeItem("cart");
      verifySession();
    }
  }, [verified]);

  return (
    <div>
      {verified && !isLoading ? "Thank you for your purchase" : "Loading..."}
    </div>
  );
};
