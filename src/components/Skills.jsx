import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const skills = [
    'MongoDB', 'Express.js', 'React', 'Node.js',
    'JavaScript (ES6+)', 'REST APIs', 'Git & GitHub',
    'Bootstrap', 'Tailwind CSS', 'Redux', 'JWT Auth', 'Mongoose'
];

function Skills() {
    return (
        <section id="skills" className="bg-light py-5">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Skills</h2>
                <Row className="g-4">
                    {skills.map((skill, index) => (
                        <Col md={4} sm={6} key={index}>
                            <Card className="h-100 text-center shadow-sm border-0">
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <Card.Title className="mb-0">{skill}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Skills;