import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  useEffect(() => {
    const stars = 200; // Reduced number of stars for better performance
    let i = 0;
    const galaxy = document.querySelector(".galaxy");
    const fragment = document.createDocumentFragment(); // Create a document fragment

    while (i < stars) {
      const star = document.createElement("div");
      star.className = "star";
      const xy = getRandomPosition();
      star.style.top = xy[0] + 'px';
      star.style.left = xy[1] + 'px';
      fragment.appendChild(star); // Append star to the fragment
      i++;
    }

    galaxy.appendChild(fragment); // Append fragment to the galaxy
  }, []);

  function getRandomPosition() {
    const y = window.innerHeight;
    const x = window.innerWidth;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomY, randomX];
  }

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-100 selection:text-cyan-900'>
      <div className="galaxy fixed top-0 -z-10 h-full w-full"></div>
      <div className="overlay"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
