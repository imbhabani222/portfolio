import React from 'react';
import './App.css'; // If you have additional App-specific CSS

function App() {
  return (
    <div className="App">
      <header>
        <nav className="container">
          <h2 className="logo">Bhabani's Portfolio</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <h1>Bhabani Sahu</h1>
          <p>Frontend Developer | React Enthusiast | Building Pixel-Perfect UIs</p>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Passionate frontend developer with 5+ years of experience in crafting responsive and interactive web applications. 
            Proficient in React, Vite, and modern JavaScript. Eager to bring innovative solutions to your team.
          </p>
          <p><strong>Location:</strong> Bangalore, India | <strong>Email:</strong> bhabani@example.com | <strong>LinkedIn:</strong> linkedin.com/in/bhabani-sahu</p>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>React & Vite</h3>
              <p>Building fast, scalable SPAs with hooks and components.</p>
            </div>
            <div className="skill-card">
              <h3>JavaScript/ES6+</h3>
              <p>Async programming, DOM manipulation, and modern features.</p>
            </div>
            <div className="skill-card">
              <h3>CSS3 & Tailwind</h3>
              <p>Responsive design, animations, and utility-first styling.</p>
            </div>
            <div className="skill-card">
              <h3>Git & Agile</h3>
              <p>Version control, CI/CD, and collaborative development.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Senior Frontend Developer - TechCorp</h3>
            <p><strong>Jan 2022 - Present (3 years)</strong></p>
            <ul>
              <li>Led development of e-commerce dashboard using React and Vite.</li>
              <li>Optimized performance, reducing load time by 40%.</li>
              <li>Mentored junior developers on best practices.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Frontend Developer - Innovate Labs</h3>
            <p><strong>Jun 2019 - Dec 2021 (2.5 years)</strong></p>
            <ul>
              <li>Built responsive UIs for mobile apps with React Native integration.</li>
              <li>Integrated APIs and handled state management with Redux.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>E-Commerce Dashboard</h3>
            <p>React + Vite app for real-time sales analytics. Features charts and user auth.</p>
            <a href="https://github.com/bhabani/ecommerce-dashboard" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-item">
            <h3>Task Management App</h3>
            <p>Full-stack todo app with drag-and-drop using React and Firebase.</p>
            <a href="https://github.com/bhabani/task-manager" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Let's collaborate on your next project!</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025  Bhabani Sahu. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;