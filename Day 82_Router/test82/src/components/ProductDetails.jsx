import { useNavigate, useParams } from 'react-router';

const ProductDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    
  return (
    <div>
        <h1 className='text-5xl mb-5'>{params.name}</h1>
        <h2 className='text-3xl'>Product Details.</h2>
        <button onClick={() => navigate(-1)} className='rounded-3xl bg-emerald-700 px-6 py-2 text-2xl active:scale-95 mt-2 cursor-pointer'>Go Back</button>
    </div>
  )
}

export default ProductDetails