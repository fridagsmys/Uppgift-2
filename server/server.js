const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./resources/users/users.router");
const authRouter = require("./resources/auth/auth.router");
const stripeRouter = require("./resources/stripe/stripe.router");
const productsRouter = require("./resources/products/product.router");
// const cartRouter = require("./resources/cart/cart.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    secret: "rumpnisse",
    maxAge: 1000 * 60 * 60,
  })
);

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/payments", stripeRouter);
app.use("/products", productsRouter);
// app.use("/cart", cartRouter);

app.listen(3001, () => console.log("rumpnisse"));
