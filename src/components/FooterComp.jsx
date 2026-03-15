import { Footer } from 'antd/es/layout/layout'
import React from 'react'
import { IMG_URL } from "../Utils/constant"
import { Row, Col, Typography, Space } from "antd";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const { Text } = Typography;
const FooterComp = () => {
    return (
        <Footer
            style={{
                background: "#001529",
                color: "white",
                padding: "12px 20px",


            }}
        >
            <Row align="middle" justify="space-between">

                {/* Left Section */}
                <Col xs={24} md={8} style={{ textAlign: "center" }}>
                    <Text style={{ color: "white", fontSize: "12px" }}>
                        © {new Date().getFullYear()} Bhabani Sahu. All Rights Reserved.
                        Built with React, Ant Design & ❤️
                    </Text>
                </Col>

                {/* Center Section */}
                <Col xs={24} md={8} style={{ textAlign: "center" }}>
                    <img
                        src={IMG_URL}
                        alt="Coding"
                        style={{
                            width: "180px",
                            height: "80px",
                            maxWidth: "100%",
                            borderRadius: "6px",
                        }}
                    />
                </Col>

                {/* Right Section */}
                <Col xs={24} md={8} style={{ textAlign: "center" }}>
                    <Space direction="vertical" size={4}>
                        <Text strong style={{ color: "white" }}>
                            Social Media
                        </Text>

                        <Space size={16}>
                            <a
                                href="https://github.com/imbhabani222"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontSize: "22px" }}
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/bhabani-sahu-340a4b1aa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontSize: "22px" }}
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://x.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontSize: "22px" }}
                            >
                                <FaXTwitter />
                            </a>
                        </Space>
                    </Space>
                </Col>

            </Row>
        </Footer>
    )
}

export default FooterComp