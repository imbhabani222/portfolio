import React from 'react';
import { Card, Typography, Row, Col, Progress, Tag, Space } from 'antd';
import { 
  CodeOutlined, 
  DatabaseOutlined, 
  CloudOutlined, 
  ToolOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;

const skillsData = [
  {
    category: "Frontend",
    icon: <CodeOutlined style={{ fontSize: 28, color: '#40b0ff' }} />,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 88 },
    ]
  },
  {
    category: "Backend",
    icon: <DatabaseOutlined style={{ fontSize: 28, color: '#40b0ff' }} />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "NestJS", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "Microservices", level: 80 },
    ]
  },
  {
    category: "Tools & Others",
    icon: <ToolOutlined style={{ fontSize: 28, color: '#40b0ff' }} />,
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS / Cloud", level: 75 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills" style={{ padding: '100px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <Title 
          level={2} 
          style={{ 
            textAlign: 'center', 
            color: '#ffffff', 
            marginBottom: '60px',
            fontSize: '48px'
          }}
        >
          My Skills
        </Title>

        <Row gutter={[24, 32]} justify="center">
          {skillsData.map((category, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                bordered={false}
                style={{
                  background: 'linear-gradient(145deg, rgba(0, 21, 41, 0.82), rgba(0, 45, 85, 0.68))',
                  border: '1px solid rgba(0, 183, 255, 0.28)',
                  borderRadius: '18px',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5), 0 0 30px rgba(0, 183, 255, 0.15)',
                  height: '100%',
                  padding: '10px',
                }}
                hoverable
              >
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {category.icon}
                    <Title level={4} style={{ color: '#ffffff', margin: 0 }}>
                      {category.category}
                    </Title>
                  </div>

                  {/* Skills List */}
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <Text style={{ color: '#c0d4f0', fontSize: '16px' }}>{skill.name}</Text>
                        <Text style={{ color: '#40b0ff' }}>{skill.level}%</Text>
                      </div>
                      <Progress 
                        percent={skill.level} 
                        showInfo={false}
                        strokeColor={{
                          '0%': '#40b0ff',
                          '100%': '#6bc1ff',
                        }}
                        trailColor="rgba(255,255,255,0.1)"
                        strokeWidth={6}
                      />
                    </div>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Tech Stack Tags */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <Title level={5} style={{ color: '#88a5c0', marginBottom: '20px' }}>
            Technologies I Work With
          </Title>
          <Space size={[8, 12]} wrap>
            {['React', 'Next.js', 'Angular', 'Node.js', 'NestJS', 'TypeScript', 
              'Tailwind', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Git'].map((tech, i) => (
              <Tag 
                key={i}
                style={{
                  background: 'rgba(0, 183, 255, 0.15)',
                  color: '#a5d6ff',
                  border: '1px solid rgba(0, 183, 255, 0.4)',
                  padding: '8px 18px',
                  fontSize: '15px',
                  borderRadius: '30px',
                }}
              >
                {tech}
              </Tag>
            ))}
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Skills;