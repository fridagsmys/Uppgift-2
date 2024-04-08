const initStripe = require("../stripe.js");

const createCheckoutSession = async (req, res) => {
  const stripe = initStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: "price_1P2EzRP8wgatYK4XSYXIWcwK",
        quantity: 2,
      },
    ],
    success_url: "http://localhost:5173",
    cancel_url: "http://localhost:5173",
  });

  res.status(200).json({ url: session.url });
};

module.exports = { createCheckoutSession };
