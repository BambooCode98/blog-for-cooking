import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import MiddleArticles from './components/middle';
import RightContent from './components/right';
import LeftAuthor from './components/left';
import Footer from './components/footer';
import './styles/App.css';

export default function App() {


  return (
    <div className='bodyStuff'>
      <div className="navStuff">
        <Navbar />
      </div>
      <div className='everythingElse'>
        <div className='content'>
          <div className='left'>
            <LeftAuthor />
          </div>
          <div className='middle'>
            <MiddleArticles />

          </div>
          <div className='right'>
            <RightContent />

          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
