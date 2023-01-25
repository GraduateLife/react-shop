import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "../pages/category.page/category-page";
import ShopPage from "../pages/shop.page/shop-page";
import Navbar from "./navbar";

function Pages() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<CategoryPage />} />
            <Route path="shop" element={<ShopPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
