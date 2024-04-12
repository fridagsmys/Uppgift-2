const initStripe = require("../../stripe.js");
const fs = require("fs").promises;

const createCheckoutSession = async (req, res) => {
  const cart = req.body;

  const stripe = initStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer: cart.customerId,
    line_items: cart.lineItems.map((item) => {
      return {
        price: item.product.default_price.id,
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
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    // console.log(session);

    const order = {
      orderNumber: Math.floor(Math.random() * 100000000),
      customer: session.customer,
      products: lineItems.data,
      total: session.amount_total,
      date: new Date(),
    };

    const orders = JSON.parse(await fs.readFile("./orders.json"));
    orders.push(order);
    await fs.writeFile("./orders.json", JSON.stringify(orders, null, 4));

    res.status(200).json({ verified: true });
  }
};

module.exports = { createCheckoutSession, verifySession };
