import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Confirmation } from "./pages/Confirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      }
    ],
  },
]);
