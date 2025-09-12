import axios from '../../api/axiosConfig'
import { loadproduct } from '../reducers/ProductSlice';
import { useDispatch } from 'react-redux';

export const asyncLoadProducts = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get('/products');
        dispatch(loadproduct(data));
        
    } catch (error) {
        console.log(error);
        
    }
}
export const asyncCreateProduct =  (product) => async (dispatch, getState) => {
    try {
        await axios.post('/products', product);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}
export const asyncUpdateProduct =  (id, product) => async (dispatch, getState) => {
    try {
        await axios.patch('/products/' + id, product);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}

export const asyncDeleteProduct =  (id) => async (dispatch, getState) => {
    try {
        await axios.delete('/products/' + id);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}