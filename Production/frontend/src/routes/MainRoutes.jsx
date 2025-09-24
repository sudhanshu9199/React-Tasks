import { Route, Routes } from "react-router";
import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"))
const Login = lazy(() => import("../../pages/Login"))
const Register = lazy(() => import("../../pages/Register"))
const Products = lazy(() => import("../../pages/Products"))
const CreateProduct = lazy(() => import("../../pages/product/CreateProduct"))
const ProductDetails = lazy(() => import("../../pages/product/ProductDetails"))
const UserProfile = lazy(() => import("../../pages/user/UserProfile"))
const PagenotFound = lazy(() => import("../../pages/PagenotFound"))
const AuthWrapper = lazy(() => import("./AuthWrapper"))
const Cart = lazy(() => import('../../pages/Cart'))

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

      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<PagenotFound />} />
    </Routes>
  );
};

export default Mainroutes;
