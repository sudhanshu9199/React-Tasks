import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from '../../src/store/actions/UserActions';

const UserProfile = () => {
  const { userReducer: { users } } = useSelector((state) => state);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
      isAdmin: users?.isAdmin,
    },
  });
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const UpdateUserHandler = (user) => {
    console.log("update Details:", user);
    dispatch(asyncUpdateUser(users.id, user));
    // reset();
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteUser(users.id));
    navigator('/login');
  }

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigator('/login')
  }
  return users ? (
    <div>
        <form
          onSubmit={handleSubmit(UpdateUserHandler)}
          className="flex flex-col w-1/2"
        >
          <input
            {...register("username")}
            className="mb-3 outline-0 border-0 border-b p-2 text-4xl"
            type="text"
            placeholder="username"
          />
          <input
            {...register("email")}
            className="mb-3 outline-0 border-0 border-b p-2 text-4xl"
            type='email'
            placeholder="email"
          />
          <input
            {...register("password")}
            className="mb-3 outline-0 border-0 border-b p-2 text-4xl"
            step={0.1}
            type="password"
            placeholder="Password"
          />

          <button>Update User</button>
          <button type="button" onClick={LogoutHandler}>Logout</button>
          <button type="button" onClick={DeleteHandler}>Delete User</button>
        </form>
    </div>
  ) : ('Loading...')
}

export default UserProfile