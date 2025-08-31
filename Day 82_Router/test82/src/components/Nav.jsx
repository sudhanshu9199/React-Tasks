import React from 'react'
import { Link, NavLink } from 'react-router';
const Nav = () => {
  return (
    <div className='flex gap-52 justify-center mb-12 text-2xl'>
        <NavLink className={e => e.isActive ? "text-amber-300" : ''
        } to='/'>Home</NavLink>
        <NavLink className={e => e.isActive ? "text-amber-300" : ''} to='/service'>Service</NavLink>
        <NavLink className={e => e.isActive ? "text-amber-300" : ''} to='/product'>Product</NavLink>
        <NavLink className={e => e.isActive ? "text-amber-300" : ''} to='/about'>About</NavLink>
    </div>
  )
}

export default Nav