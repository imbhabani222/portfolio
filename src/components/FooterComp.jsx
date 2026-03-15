import { Footer } from "antd/es/layout/layout";
import React from "react";
import { IMG_URL } from "../Utils/constant";
import { Row, Col, Typography, Space } from "antd";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import styles from "../styles/footer.module.css";

const { Text } = Typography;

const FooterComp = () => {
  return (
    <Footer className={styles.footer}>
      <Row align="middle" justify="space-between">
        
        {/* Left Section */}
        <Col xs={24} md={8} className={styles.leftSection}>
          <Text className={styles.copyrightText}>
            © {new Date().getFullYear()} Bhabani Sahu. All Rights Reserved.
            Built with React, Ant Design & ❤️
          </Text>
        </Col>

        {/* Center Section */}
        <Col xs={24} md={8} className={styles.centerSection}>
          <img
            src={IMG_URL}
            alt="Coding"
            className={styles.image}
          />
        </Col>

        {/* Right Section */}
        <Col xs={24} md={8} className={styles.rightSection}>
          <Space direction="vertical" size={4}>
            <Text strong className={styles.socialTitle}>
              Social Media
            </Text>

            <Space size={16}>
              <a
                href="https://github.com/imbhabani222"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bhabani-sahu-340a4b1aa/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaXTwitter />
              </a>
            </Space>
          </Space>
        </Col>

      </Row>
    </Footer>
  );
};

export default FooterComp;