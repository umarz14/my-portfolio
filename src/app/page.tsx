import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}




