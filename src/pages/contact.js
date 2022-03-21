
import React from 'react';


import Navbar from '../components/navbar';
import RightContent from '../components/right';
import LeftAuthor from '../components/left';
import Footer from '../components/footer';
import '../styles/App.css';






export default function Contact() {



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
              <h1>Contact</h1>
              <h4>Email: ???</h4>
              <h4>Phone: ???</h4>
              <h4>Other Accounts: ???</h4>

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