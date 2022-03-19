// import React, { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {


  return (
    <div className="navbar">
      <div className='maintitle'>
        <h1 className='title'>Katie's Corner</h1>
      </div>
      <div className='links'>
        <ul>
          <li>
            <a href="" className='link'>Home</a>
          </li>
          <li>
            <a href="" className='link'>Articles</a>
          </li>
          <li>
            <a href="" className='link'>About</a>
          </li>
          <li>
            <a href="" className='link last'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}