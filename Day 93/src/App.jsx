import { useEffect } from 'react';
import './index.css';
import { asyncgetUsers } from './store/userActions.jsx';
import { useDispatch, useSelector } from 'react-redux';
const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetUsers());
  }, []);
  return (
    <div className='text-4xl'>App</div>
  )
}

export default App