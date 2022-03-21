import React, {useState} from 'react';
import Navbar from '../components/navbar';
import RightContent from '../components/right';
import LeftAuthor from '../components/left';
import Footer from '../components/footer';
import '../styles/App.css';


export default function ArticleTemplates() {



  return(
    <div>
      <div className='aboutStuff'>
        <div className="navStuff">
          <Navbar />
        </div>
        <div className='aboutMain'>
          <div className='aboutContent'>
            <div className='middle'>
                <p>Article</p>
            </div>
            <div className='right'>
              <p>Article Overview</p>
            </div>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}









