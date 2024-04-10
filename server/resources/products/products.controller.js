const initStripe = require("../../stripe.js");

const fetchProducts = async (req, res) => {
  const stripe = initStripe();
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  res.status(200).json(products);
};

module.exports = { fetchProducts }