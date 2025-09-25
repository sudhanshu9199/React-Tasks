import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import axios from "../src/api/axiosConfig";

import { asyncUpdateUser } from "../src/store/actions/UserActions";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteProducts from "../src/utils/useInfiniteProducts";
const Products = () => {
  const {products, hasMore, fetchProducts} = useInfiniteProducts()
  const dispatch = useDispatch();
  // const {
  //   userReducer: { users },
  //   productsReducer: { products }
  // } = useSelector((state) => state);
  const users = useSelector((state) => state.userReducer.users);






  const AddToCartHandler = (products) => {
    const copyUser = { ...users, cart: [...users.cart] };
    const x = copyUser.cart.findIndex((c) => c?.products?.id == products.id);
    if (x == -1) {
      copyUser.cart.push({ products, quantity: 1 });
    } else {
      copyUser.cart[x] = {
        products,
        quantity: copyUser.cart[x].quantity + 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const renderProduct = products.map((products) => {
    return (
      <div
        key={products.id}
        className="border-2 rounded-2xl bg-cyan-800 w-70 overflow-hidden whitespace-break-spaces p-1"
      >
        <img src={products.image} alt="" className="w-full h-50 object-cover" />
        <h1>{products.title}</h1>
        <p>{products.desc.slice(0, 100)}...</p>
        <div>
          <p>{products.price} rs.</p>
          <button onClick={() => AddToCartHandler(products)}>
            Add to cart
          </button>
        </div>
        <Link to={`/product/${products.id}`} className="bg-amber-800 ">
          More Info
        </Link>
      </div>
    );
  });

  return (
    <div>
      <InfiniteScroll
        className="flex gap-5 flex-wrap"
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Suspense fallback={<h1 className="text-center text-5xl text-red-600">LOADING...</h1>}>
        {renderProduct}
        </Suspense>
      </InfiniteScroll>
    </div>
  )
};

export default Products;