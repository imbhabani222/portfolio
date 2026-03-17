import React from 'react';
import { Typography, Space, Divider, Tag } from 'antd';
import { CodeOutlined, UserOutlined, BulbOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

import profilePic from '../../../../assets/myProfile.jfif';

const About = () => {
  return (
    <div
      className="about-section"
      id="about"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#e2e8f0'
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>

          {/* HERO SECTION WITH PROFILE PICTURE */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{ position: 'relative' }}>
              <img
                src={profilePic}
                alt="Bhabani Sahu"
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  border: '8px solid #40b0ff',
                  boxShadow: '0 0 50px rgba(64, 176, 255, 0.7)',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '50%',
                border: '3px solid rgba(64, 176, 255, 0.3)',
                pointerEvents: 'none'
              }} />
            </div>

            <div style={{ flex: 1, minWidth: '320px', textAlign: 'center' }}>
              <Title
                level={1}
                style={{
                  color: '#ffffff',
                  margin: '0 0 8px 0',
                  fontSize: 'clamp(2.6rem, 7vw, 4.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-2px'
                }}
              >
                Hello! I'm Bhabani Sahu
              </Title>

              <Text
                strong
                style={{
                  fontSize: '1.55rem',
                  color: '#94a3b8',
                  letterSpacing: '2px',
                  display: 'block'
                }}
              >
                Software Engineer from India 🇮🇳
              </Text>
              <Text
                strong
                style={{
                  fontSize: '1.55rem',
                  color: '#94a3b8',
                  letterSpacing: '2px',
                  display: 'block'
                }}
              >
                MERN Stack Developer • 4+ Years Experience
              </Text>
              <Paragraph
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.9',
                  color: '#cbd5e1',
                  maxWidth: '820px',
                  margin: '0 auto',
                  textAlign: 'center'
                }}
              >
                Obsessed with <strong>"Why" & "How"</strong>
              </Paragraph>

            </div>
          </div>

          <Divider style={{ borderColor: 'rgba(64, 176, 255, 0.3)', margin: '40px 0' }} />

          {/* PROFESSIONAL BIO – HR-OPTIMIZED */}
          <Paragraph
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.9',
              color: '#cbd5e1',
              maxWidth: '820px',
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            Passionate <strong>MERN Stack Developer</strong> with <strong>4+ years</strong> of hands-on experience building scalable, high-performance web applications.
            I specialize in <strong>React.js, Next.js, Node.js, Express.js & MongoDB</strong>, delivering production-grade solutions with clean architecture, microservices, and seamless RESTful API integrations.
          </Paragraph>

          {/* Skill Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '24px'
          }}>
            <Tag color="geekblue" style={{ fontSize: '15px', padding: '8px 18px' }}>
              React.js &amp; Next.js
            </Tag>
            <Tag color="cyan" style={{ fontSize: '15px', padding: '8px 18px' }}>
              Node.js • Express
            </Tag>
            <Tag color="purple" style={{ fontSize: '15px', padding: '8px 18px' }}>
              Gemini AI • GenAI
            </Tag>
            <Tag color="magenta" style={{ fontSize: '15px', padding: '8px 18px' }}>
              Microservices
            </Tag>
            <Tag color="blue" style={{ fontSize: '15px', padding: '8px 18px' }}>
              Performance Optimization
            </Tag>
            <Tag color="geekblue" style={{ fontSize: '15px', padding: '8px 18px' }}>
              Tailwind • Ant Design
            </Tag>
          </div>

          <Paragraph style={{
            marginTop: '40px',
            fontSize: '1.15rem',
            color: '#94a3b8',
            textAlign: 'center'
          }}>
            Let’s build something exceptional together — open to new opportunities and collaborations!
          </Paragraph>
        </Space>
      </div>
    </div>
  );
};

export default About;