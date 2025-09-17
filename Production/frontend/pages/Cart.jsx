import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../src/store/actions/UserActions";

const Cart = () => {
  const dispatch = useDispatch();
  const {
    userReducer: { users },
    productsReducer: { products },
  } = useSelector((state) => state);

  const IncreaseQuantityHandler = (index, product) => {
    const copyUser = { ...users, cart: [...users.cart] };
    copyUser.cart[index] = {
      ...copyUser.cart[index],
      quantity: copyUser.cart[index].quantity + 1,
    };

    console.log(copyUser);

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const DecreaseQuantityHandler = (index, product) => {
    const copyUser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 0) {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity - 1,
      };
    }
    else {
        copyUser.cart.splice(index, 1);
    }

    console.log(copyUser);
    

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const cartItems = users.cart.map((c, index) => {
    return (
      <li key={c.products.id}>
        <img src={c.products.image} alt="" />
        <p>{c.products.title}</p>
        <p>{c.products.price}</p>
        <div>
          <button onClick={() => DecreaseQuantityHandler(index, c)}>-</button>
          <p>{c.quantity}</p>
          <button onClick={() => IncreaseQuantityHandler(index, c)}>+</button>
        </div>
      </li>
    );
  });
  return <ul>{cartItems}</ul>;
};

export default Cart;
