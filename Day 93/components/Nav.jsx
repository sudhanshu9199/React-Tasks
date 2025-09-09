import React from 'react'
import { NavLink } from 'react-router';
const Nav = () => {
  return (
    <nav className='flex justify-center gap-7 text-2xl p-2'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </nav>
  )
}

export default Nav