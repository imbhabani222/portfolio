import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';



function Contact() {
    return (
        <section id="contact" className="py-5 bg-dark text-white">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Get In Touch</h2>
                <Row className="text-center">
                    <Col>
                        <p className="mb-2">📧 imbhabani222@gmail.com</p>
                        <p className="mb-4">📱 +91 9337061322</p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default Contact;