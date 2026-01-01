import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <section id="about" className="py-5">
            <Container>
                <h2 className="text-center mb-5 fw-bold">About Me</h2>
                <Row>
                    <Col md={10} lg={8} className="mx-auto text-center">
                        <p className="lead">
                            I'm a passionate Full-Stack MERN developer skilled in crafting efficient and user-friendly web applications.
                        </p>
                        <p>
                            Experienced in building RESTful APIs, responsive frontends, and managing MongoDB databases.
                            I love turning ideas into reality using modern JavaScript technologies.
                        </p>
                        <p>Add your journey, education, or interests here!</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;