import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/public";
import Home from "../pages/public/home";
import Products from "../pages/public/products";
import Category from "../pages/public/category";
import MyOrders from "../pages/public/my-orders";
import LoginPage from "../pages/auth/login-page";
import AuthLayout from "../layouts/auth";
import Logout from "../pages/auth/logout";
import ProductsDetails from "../components/products_details";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/details" element={<ProductsDetails />} />
          <Route path="/category" element={<Category />} />
          <Route path="/my-order" element={<MyOrders />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login"element={<LoginPage />} />
          <Route path="/auth/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
