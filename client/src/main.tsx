import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import CartProvider from "./context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
