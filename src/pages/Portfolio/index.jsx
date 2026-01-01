import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

function Portfolio() {
    const { pathname, hash } = useLocation();

    // Smooth scroll to section when hash changes (e.g., /#projects → scroll to projects)
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0); // Scroll to top on route change
        }
    }, [pathname, hash]);

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