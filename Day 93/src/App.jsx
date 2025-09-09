import { useEffect } from 'react';
import './index.css';
import { asyncgetUsers } from './store/userActions.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Mainroutes from './routes/Mainroutes.jsx';
import Nav from '../components/Nav.jsx';
const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetUsers());
  }, []);
  return (
    <div className='text-white bg-black'>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App