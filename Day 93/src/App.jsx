import { useEffect } from 'react';
import axios from './api/axiosConfig.jsx';
import './index.css';
const App = () => {
  const getProduct = async() => {
    try {
      const res = await axios.get('/products');
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className='text-4xl'>App</div>
  )
}

export default App