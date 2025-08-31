import { useNavigate } from 'react-router';

const Product = () => {
  const navigate = useNavigate();
  const NavigateHandler = (names) => {
    navigate(`/product/detail/${names}`);
  };
  return (
    <div>
      <h1 className='text-cyan-200 text-4xl'>Product</h1>
      <div className='my-5'>
        <h3 className='text-3xl'>Product 1</h3>
        <button onClick={() => NavigateHandler('product 1')} className='rounded-3xl bg-emerald-700 px-6 py-2 text-2xl active:scale-95 mt-2 cursor-pointer'>Details</button>
      </div>
      <div className='my-5'>
        <h3 className='text-3xl'>Product 2</h3>
        <button onClick={() => NavigateHandler('product 2')} className='rounded-3xl bg-emerald-700 px-6 py-2 text-2xl active:scale-95 mt-2 cursor-pointer'>Details</button>
      </div>
      <div className='my-5'>
        <h3 className='text-3xl'>Product 3</h3>
        <button onClick={() => NavigateHandler('product 3')} className='rounded-3xl bg-emerald-700 px-6 py-2 text-2xl active:scale-95 mt-2 cursor-pointer'>Details</button>
      </div>
    </div>
  )
}

export default Product