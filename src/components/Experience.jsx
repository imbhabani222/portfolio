import React from 'react';
import Container from 'react-bootstrap/Container';

function Experience() {
  return (
    <section id="experience" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Experience</h2>
        <p className="text-center lead">Freelance MERN Developer | 2023 – Present</p>
        <p className="text-center">Built multiple full-stack applications for clients using the MERN stack.</p>
        {/* You can expand this with Timeline or Accordion later */}
      </Container>
    </section>
  );
}

export default Experience;