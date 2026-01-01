import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard({ title, description, image, liveLink, githubLink }) {
  return (
    <Card className="h-100 shadow border-0">
      <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <div className="mt-auto">
          <Button variant="primary" href={liveLink} target="_blank" className="me-2">Live Demo</Button>
          <Button variant="secondary" href={githubLink} target="_blank">GitHub</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;