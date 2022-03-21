

import React from 'react';
import Navbar from '../components/navbar';
import RightContent from '../components/right';
import LeftAuthor from '../components/left';
import Footer from '../components/footer';
import '../styles/App.css';



export default function Articles() {



  return(
    <div>
      <div className='aboutStuff'>
        <div className="navStuff">
          <Navbar />
        </div>
        <div className='aboutMain'>
          <div className='aboutContent'>
            <div className='left'>
              <LeftAuthor />
            </div>
            <div className='middle'>
              <p>Article Categories </p>

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
    </div>
  )
}