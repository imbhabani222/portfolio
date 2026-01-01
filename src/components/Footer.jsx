// src/components/Footer.jsx
import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-dark text-white py-3">
            <Container className="text-center">
                <Row>
                    <Col className="d-flex justify-content-center align-items-center fs-8">
                        {" "}
                        © {new Date().getFullYear()} Bhabani Sahu. All Rights Reserved.
                        Built with React, Bootstrap & ❤️
                    </Col>
                    <Col>
                        <img
                            src={"https://media1.tenor.com/m/GfSX-u7VGM4AAAAC/coding.gif "}
                            alt="Cooooooddddinnnnggggg"
                            className="img-fluid shadow"
                            style={{
                                width: "180px",
                                height: "80px",
                                maxWidth: "100%",
                            }}
                        />
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center gap-2">
                        <div className="fw-bold">Social Media</div>

                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <a
                                href="https://github.com/imbhabani222"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover-opacity"
                                aria-label="GitHub"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bhabani-sahu-340a4b1aa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover-opacity"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://x.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover-opacity"
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
