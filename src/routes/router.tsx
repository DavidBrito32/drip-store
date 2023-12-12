import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/public";
import Home from "../pages/public/home";
import Products from "../pages/public/products";
import Category from "../pages/public/category";
import MyOrders from "../pages/public/my-orders";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category" element={<Category />} />
          <Route path="/my-order" element={<MyOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
