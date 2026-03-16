import React from 'react';
import { Card, Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="about-section" id="about" style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Card
          className="about-card"
          bordered={false}
          style={{
            background: 'linear-gradient(145deg, rgba(0, 21, 41, 0.82), rgba(0, 45, 85, 0.68))',
            border: '1px solid rgba(0, 183, 255, 0.28)',
            borderRadius: '18px',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5), 0 0 30px rgba(0, 183, 255, 0.15)',
            padding: '40px 50px',
          }}
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* Title with Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <UserOutlined 
                style={{ 
                  fontSize: '42px', 
                  color: '#40b0ff',
                  filter: 'drop-shadow(0 0 12px #40b0ff)'
                }} 
              />
              <Title 
                level={2} 
                style={{ 
                  color: '#ffffff', 
                  margin: 0,
                  fontSize: '42px',
                  fontWeight: 700
                }}
              >
                About Me
              </Title>
            </div>

            {/* Description */}
            <Paragraph 
              style={{ 
                color: '#c0d4f0', 
                fontSize: '17px', 
                lineHeight: '1.8',
                marginBottom: 0
              }}
            >
              Full Stack Developer with <strong>4+ years</strong> of experience building scalable web 
              applications using React.js, Angular, Next.js, Node.js, and NestJS. Skilled in 
              microservices architecture, CMS development, and low-code platforms. 
              Passionate about creating high-performance, production-ready solutions 
              from concept to deployment.
            </Paragraph>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default About;