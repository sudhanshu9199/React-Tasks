import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router';
const Register = () => {
    const { register, reset, handleSubmit } = useForm();

    const RegisterHandler = (user) => {
        user.id = nanoid();
        console.log('here users:',user);
        reset();
    }
  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col w-1/2'>
        <input {...register('username')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="text" placeholder='John-Doe'/>
        <input {...register('email')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="email" placeholder='Jhone@abc.mail'/>
        <input {...register('password')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="password" placeholder='New Password'/>

        <button>Register</button>
        <p className='mt-5'>Already Have an account? <Link className='text-blue-400' to='/login'>Login</Link></p>
    </form>
  )
}

export default Register