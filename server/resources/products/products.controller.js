const initStripe = require("../../stripe.js");

const fetchProducts = async (req, res) => {
  const stripe = initStripe();
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 100,
  });
  res.status(200).json(products.data);
};

module.exports = { fetchProducts };
