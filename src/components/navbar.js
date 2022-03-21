import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link, Outlet } from 'react-router-dom';


export default function Navbar() {


  return (
    <div className="navbar">
      <div className='maintitle'>
        <h1 className='title'>Katie's Corner</h1>
        <p className='subTitle'>A site to blog about interesting topics.</p>
      </div>
      <div className='links'>
        <ul>
          <li>
            <Link to="/" className='link l1'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='link l2'>About</Link>
          </li>
          <li>
            <Link to="/articles" className='link l3'>Articles</Link>
          </li>
          <li>
            <Link to="/contact" className='link last l4'>Contact</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}