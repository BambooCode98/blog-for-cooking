

import React from 'react';
import App from '../App';
import Navbar from '../components/navbar';
import RightContent from '../components/right';
import LeftAuthor from '../components/left';
import Footer from '../components/footer';
// import '../styles/navbar.css';
// import '../styles/middle.css';
// import '../styles/left.css';
// import '../styles/right.css';
import '../styles/App.css';



export default function About() {



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
              <p>About Page </p>

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



