import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "../pages/category-page";
import ProductPage from "../pages/product-page";
import SignInPage from "../pages/sign-in-page";
import Navbar from "./navbar";

function Pages() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<CategoryPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="sign-in" element={<SignInPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
