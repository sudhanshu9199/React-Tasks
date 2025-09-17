import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router';
import { asyncUpdateUser } from '../src/store/actions/UserActions';

const Products = () => {
  const dispatch = useDispatch();
  const {
    userReducer: { users },
    productsReducer: { products }
  } = useSelector((state) => state);

  const AddToCartHandler = (products) => {
    const copyUser = { ...users, cart: [...users.cart] };
    const x = copyUser.cart.findIndex( c => c?.products?.id == products.id);
    if (x == -1) {
      copyUser.cart.push({ products, quantity: 1 });
    }
    else {
      copyUser.cart[x] = {
        products,
        quantity: copyUser.cart[x].quantity + 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser))
  };

  const renderProduct = products.map((products) => {
    return (
      <div key={products.id} className='border-2 rounded-2xl bg-cyan-800 w-70 overflow-hidden whitespace-break-spaces p-1'>
        <img src={products.image} alt="" className='w-full h-50 object-cover'/>
        <h1>{products.title}</h1>
        <p>{products.desc.slice(0, 100)}...</p>
        <div>
          <p>{products.price} rs.</p>
          <button onClick={() => AddToCartHandler(products)}>Add to cart</button>
        </div>
        <Link to={`/product/${products.id}`} className='bg-amber-800 '>More Info</Link>
      </div>
    )
  })
  
  return (
    products.length > 0 ? <div className='flex gap-5 flex-wrap'>{renderProduct}</div> : 'Loading...'
  )
}

export default Products