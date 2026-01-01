import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "E-Commerce App",
    description: "Full-stack online store with user auth, cart, and payment integration.",
    image: "https://via.placeholder.com/400x250?text=E-Commerce",
    liveLink: "#",
    githubLink: "#"
  },
  // Add 5 more projects here...
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Projects</h2>
        <Row className="g-4">
          {projects.map((proj, idx) => (
            <Col lg={4} md={6} key={idx}>
              <ProjectCard {...proj} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;