// src/pages/Portfolio.jsx
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

function Portfolio() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default Portfolio;