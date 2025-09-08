import axios from '../api/axiosConfig';
import { loadUser } from './UserSlice';

export const asyncgetUsers = () => async(dispatch, getState) => {
    try {
        console.log('Current State >>>',getState());
        const res = await axios.get('/users');
        dispatch(loadUser(res.data));
    } catch (error) {
        console.log(error);
    }
}