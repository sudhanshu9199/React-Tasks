import React from 'react'
import { useNavigate, useParams } from 'react-router';

const ServiceUpdate = () => {
    const navigate = useNavigate();
  return (
     <div>
        <h1>Service Update</h1>
        <div className='my-5'>
        <h3 className='text-3xl'>Update kar lo service..</h3>
        <button onClick={() => navigate(-1)} className='rounded-3xl bg-emerald-900 px-6 py-2 text-2xl active:scale-95 mt-2 cursor-pointer'>Go Back</button>
      </div>
    </div>
  )
}

export default ServiceUpdate