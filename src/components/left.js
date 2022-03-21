import React, { useState } from 'react';
import '../styles/left.css';

export default function LeftAuthor () {


  return(
    <div className='leftContent'>
      <img className='blogAuthor' src={require('../images/icons8-name-64.png')} alt="Blog Author"/>
      <p className='summmaryArea'>Summary</p>
    </div>
  )
}

















