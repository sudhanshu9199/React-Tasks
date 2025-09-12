import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router';

const Products = () => {
  const products = useSelector((state) => state.productsReducer.products);
  console.log(products);

  const renderProduct = products.map((products) => {
    return (
      <div key={products.id} className='border-2 rounded-2xl bg-cyan-800 w-70 overflow-hidden whitespace-break-spaces p-1'>
        <img src={products.image} alt="" className='w-full h-50 object-cover'/>
        <h1>{products.title}</h1>
        <p>{products.desc.slice(0, 100)}...</p>
        <div>
          <p>{products.price} rs.</p>
          <button>Add to cart</button>
        </div>
        <Link to={`/product/${products.id}`}>More Info</Link>
      </div>
    )
  })
  
  return (
    products.length > 0 ? <div className='flex gap-5 flex-wrap'>{renderProduct}</div> : 'Loading...'
  )
}

export default Products