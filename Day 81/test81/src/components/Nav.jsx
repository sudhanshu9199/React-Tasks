import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='flex gap-52'>
        <Link to="/">Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/service'>Service</Link>
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Nav