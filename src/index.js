import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import About from './pages/about';
import Articles from './pages/articles';
import Contact from './pages/contact';
import ArticleTemplates from './pages/articleTemplate';
import LoginPage from './pages/loginPage';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >

      </Route>
      <Route path="about" element={<About />} />
      <Route path="articles" element={<Articles />} />
      <Route path="contact" element={<Contact />} />
      <Route path="article/:id" element={<ArticleTemplates />} />
      <Route path="KC-admin" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
