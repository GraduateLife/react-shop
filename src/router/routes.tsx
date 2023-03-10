import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/404-page";
import CategoryPage from "../pages/category-page";
import CheckoutPage from "../pages/checkout-page";
import ProductsPage from "../pages/products-page";
import SignInPage from "../pages/sign-in-page";
import SignUpPage from "../pages/sign-up-page";
import Navbar from "../components/navbar/navbar";

function WebsitePages() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<CategoryPage />} />
            <Route path="products/*" element={<ProductsPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default WebsitePages;
