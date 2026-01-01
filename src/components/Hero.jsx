import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import myProfile from "../assets/myProfile.jfif";

function Hero() {
    return (
        <section id="home" className="bg-primary text-white py-5" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h1 className="display-4 fw-bold">Hi, I'm <span className="text-warning">Bhabani Sahu</span></h1>
                        <h2 className="mb-4">Full-Stack MERN Developer</h2>
                        <p className="lead mb-4">
                            Building modern, scalable web applications with MongoDB, Express, React, and Node.js.
                        </p>
                        <Button variant="light" size="lg" href="#contact" className="me-3">Hire Me</Button>
                        <Button variant="outline-light" size="lg" href="#projects">View Projects</Button>
                    </Col>
                    <Col lg={6} className="text-center mt-4 mt-lg-0">
                        <img
                            src={myProfile}
                            alt="Your Profile"
                            className="rounded-circle img-fluid shadow"
                            style={{
                                width: '320px',        // Fixed width
                                height: '320px',       // Fixed height (same as width → perfect circle)
                                objectFit: 'cover',    // Ensures the image fills the circle nicely (crops if needed)
                                maxWidth: '100%',      // Responsive on smaller screens
                                border: '5px solid white', // Optional: adds a nice border
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;