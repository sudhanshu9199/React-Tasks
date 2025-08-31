import { useNavigate } from 'react-router';

const ServiceDetails = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>More Service</h1>
        <div className='my-5'>
        <h3 className='text-3xl'>choose us...</h3>
        <button onClick={() => navigate(-1)} className='rounded-3xl bg-emerald-700 px-6 py-2 text-2xl active:scale-95 mt-2 cursor-pointer'>Go Back</button>
      </div>
    </div>
  )
}

export default ServiceDetails