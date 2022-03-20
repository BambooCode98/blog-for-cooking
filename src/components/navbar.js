// import React, { useState } from 'react';
import '../styles/navbar.css';

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
            <a href="" className='link l1'>Home</a>
          </li>
          <li>
            <a href="" className='link l2'>Articles</a>
          </li>
          <li>
            <a href="" className='link l3'>About</a>
          </li>
          <li>
            <a href="" className='link last l4'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}