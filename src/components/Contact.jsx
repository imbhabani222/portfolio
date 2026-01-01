import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'; // fa6 has the new X icon



function Contact() {
    return (
        <section id="contact" className="py-5 bg-dark text-white">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Get In Touch</h2>
                <Row className="text-center">
                    <Col>
                        <p className="mb-2">📧 imbhabani222@gmail.com</p>
                        <p className="mb-4">📱 +91 9337061322</p>
                        <div className="d-flex justify-content-center gap-4">
                            <a
                                href="https://github.com/imbhabani222"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white fs-1 hover-opacity"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bhabani-sahu-340a4b1aa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white fs-1 hover-opacity"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://x.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white fs-1 hover-opacity"
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default Contact;