// src/components/Footer.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container className="text-center">
                <p className="mb-0">
                    © {new Date().getFullYear()} Bhabani Sahu. All Rights Reserved.
                    Built with React, Bootstrap & ❤️
                </p>
            </Container>
        </footer>
    );
}

export default Footer;