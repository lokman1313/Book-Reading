import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const list = (
    <>
    <li> <NavLink to='/' className={({isActive})=> isActive ? 'btn btn-success btn-outline' : 'btn btn-ghost'}>Home</NavLink> </li>
    <li> <NavLink to='/books' className={({isActive})=> isActive ? 'btn btn-success btn-outline' : 'btn btn-ghost'}>Listed Books</NavLink> </li>
    <li> <NavLink to='/pagesToRead' className={({isActive})=> isActive ? 'btn btn-success btn-outline' : 'btn btn-ghost'}>Pages to Read</NavLink> </li>
    </>
  )
    return (
      <nav className='bg-base-100 shadow-sm mb-4'>
        <div className="navbar container mx-auto px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-x-2">
        {list}
      </ul>
    </div>
    <h1 className='font-bold text-2xl'>Book Vibe</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
      {list}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <a className="btn btn-success text-white">Sign In</a>
    <a className="btn btn-accent text-white">Sing Up</a>
  </div>
</div>
      </nav>
    );
};

export default Navbar;