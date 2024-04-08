// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="">
          <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/research/blog" element={<Blog />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
