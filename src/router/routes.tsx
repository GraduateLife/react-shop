import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/404-page";
import CategoryPage from "../pages/category-page";
import CheckoutPage from "../pages/checkout-page";
import ProductPage from "../pages/product-preview-page";
import SignInPage from "../pages/sign-in-page";
import SignUpPage from "../pages/sign-up-page";
import Navbar from "./navbar";

function Pages() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<CategoryPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
