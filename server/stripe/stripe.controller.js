const initStripe = require("../stripe.js");
const fs = require("fs").promises;

const createCheckoutSession = async (req, res) => {
  const cart = req.body;

  const stripe = initStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    // customer: "",
    line_items: cart.map((item) => {
      return {
        price: item.product,
        quantity: item.quantity,
      };
    }),
    success_url: "http://localhost:5173/confirmation",
    cancel_url: "http://localhost:5173",
  });

  res.status(200).json({ url: session.url, sessionId: session.id });
};

const verifySession = async (req, res) => {
  const stripe = initStripe();

  const sessionId = req.body.sessionId;

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status === "paid") {
    const order = {
      orderNumber: Math.floor(Math.random() * 100000000),
      customerName: session.customer_details.name,
      products: "",
      total: session.amount_total,
      date: new Date(),
    };

    const orders = JSON.parse(await fs.readFile("./orders.json"));
    orders.push(order);
    await fs.writeFile("./orders.json", JSON.stringify(orders, null, 4));

    res.status(200).json({ verified: true });
  }

  console.log(session);
  
};

module.exports = { createCheckoutSession, verifySession };
