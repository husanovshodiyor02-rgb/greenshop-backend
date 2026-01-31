import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import Profile from "../pages/profile";
import Shop from "../pages/shop";
import BillingAddress from "../components/ProductCheckout/billingadress";
import DetailPage from "../pages/DetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/proced-checkout",
    element: <BillingAddress />,
  },
  {
    path: "/shop/:category/:id",
    element: <DetailPage />,
  },
]);
