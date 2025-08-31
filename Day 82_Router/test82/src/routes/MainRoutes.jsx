import React from "react";
import { Routes, Route } from "react-router";
import Home from "../components/Home";
import Product from "../components/Product";
import Service from "../components/Service";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";
import ServiceDetails from "../components/ServiceDetails";
import ServiceUpdate from "../components/ServiceUpdate";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetails />} />
      <Route path="/Service" element={<Service />}>
        <Route path="/Service/detail" element={<ServiceDetails />} />
        <Route path="/Service/update" element={<ServiceUpdate />} />
      </Route>
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default MainRoutes;
