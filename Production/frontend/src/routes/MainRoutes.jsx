import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Products from "../../pages/Products";
import CreateProduct from "../../pages/product/CreateProduct";
import ProductDetails from "../../pages/product/ProductDetails";
import UserProfile from "../../pages/user/UserProfile";
import PagenotFound from "../../pages/PagenotFound";
import AuthWrapper from "./AuthWrapper";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route path="/admin/user-profile" element={<AuthWrapper><UserProfile /></AuthWrapper>} />

      <Route path="*" element={<PagenotFound />} />
    </Routes>
  );
};

export default Mainroutes;
