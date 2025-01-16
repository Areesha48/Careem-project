/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// src/App.js
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Hero';
import CardsSection from "./CardsSection";
import AboutUs from "./AboutUs";
import Captains from "./Captains";
import EngeringCareem from "./EngeringCareem";
import SocialImpact from './SocialImpact';
import BlogSection from './BlogSection';

import Slider from "./Slider";
import Footer from './Footer';


// import BannerSlider from "./Slider";
// import Slider from 'react-slick';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardsSection />
      <Slider />
      <AboutUs />
      <Captains />
      <EngeringCareem />
      <SocialImpact />
      <BlogSection />
      <Footer/>


    </div>
  );
}

export default App;
