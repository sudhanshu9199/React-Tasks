import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from 'react-router';
import { asyncRegisterUser } from '../src/store/actions/UserActions';
import { useDispatch } from 'react-redux';
const Register = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const RegisterHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        console.log('here users:',user);
        dispatch(asyncRegisterUser(user));
        reset();
        navigator('/login')
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