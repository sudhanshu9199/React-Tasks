import { Outlet, useNavigate, useParams } from 'react-router';


const Service = () => {
  const navigate = useNavigate();
      const params = useParams();
      console.log(params);
  return (
    <div>
      <div className='my-5'>
        <h3 className='text-3xl'>Servies</h3>
        <button onClick={() => navigate('/service/detail')} className='rounded-3xl bg-amber-600 px-6 py-2 text-2xl active:scale-95 mt-2 cursor-pointer'>More Service</button>
        <button onClick={() => navigate('/service/update')} className='rounded-3xl bg-amber-600 px-6 py-2 text-2xl active:scale-95 mt-2 ml-2 cursor-pointer'>Update Service</button>
      </div>
      <hr />
      <Outlet />
    </div>
  )
}

export default Service