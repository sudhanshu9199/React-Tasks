import React from 'react'
import { useForm } from 'react-hook-form';
import {Link} from 'react-router'
const Login = () => {
    const { register, reset, handleSubmit } = useForm();

    const LoginHandler = (user) => {
        console.log('here users:',user);
        reset();
    }
  return (
    <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col w-1/2'>
        <input {...register('username')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="text" placeholder='John-Doe'/>
        <input {...register('email')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="email" placeholder='Jhone@abc.mail'/>
        <input {...register('password')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="password" placeholder='******'/>

        <button>Login</button>
        <p className='mt-5'>Don't Have an account? <Link className='text-blue-400' to='/register'>Register</Link></p>
    </form>
  )
}

export default Login