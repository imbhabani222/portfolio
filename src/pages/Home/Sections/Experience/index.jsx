import React from 'react';
import { CalendarOutlined, ClockCircleOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';
import { Timeline, Typography,Tag } from 'antd';
const { Paragraph } = Typography;
const Experience = () => {
    return (
        <Timeline
            mode="alternate"
            style={{ padding: '0 20px' }}
            items={[
                {
                    label: (
                        <div style={{ fontSize: '1.1rem', color: '#94a3b8', textAlign: 'right' }}>
                            <CalendarOutlined style={{ marginRight: '8px' }} />
                            Sep 2021 – Present
                        </div>
                    ),
                    color: '#40b0ff',
                    dot: <RocketOutlined style={{ fontSize: '18px' }} />,
                    children: (
                        <div>
                            <strong style={{ fontSize: '1.35rem', color: '#ffffff' }}>
                                Software Development Engineer
                            </strong>
                            <div style={{ color: '#94a3b8', marginBottom: '12px' }}>
                                Hutech Solutions • Bengaluru, Karnataka
                            </div>

                            <Paragraph style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#cbd5e1' }}>
                                Building production-grade, user-centric web platforms using <strong>React.js, Next.js, Node.js & MongoDB</strong>.
                                Collaborated cross-functionally with product owners and backend teams to deliver scalable microservices solutions.
                            </Paragraph>

                            <div style={{ marginTop: '12px' }}>
                                <Tag color="geekblue">20% Performance Boost</Tag>
                                <Tag color="cyan">15% Faster Load Time</Tag>
                                <Tag color="purple">Microservices Architecture</Tag>
                            </div>
                        </div>
                    ),
                },

                {
                    label: (
                        <div style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
                            <CalendarOutlined style={{ marginRight: '8px' }} />
                            May 2021 – Sep 2021
                        </div>
                    ),
                    color: 'green',
                    dot: <CodeOutlined style={{ fontSize: '18px' }} />,
                    children: (
                        <div>
                            <strong style={{ fontSize: '1.35rem', color: '#ffffff' }}>
                                Frontend Developer
                            </strong>
                            <div style={{ color: '#94a3b8', marginBottom: '12px' }}>
                                Sapio Analytica Pvt. Ltd • Mumbai, Maharashtra
                            </div>

                            <Paragraph style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#cbd5e1' }}>
                                Transformed an MVP into a full-featured production application using <strong>React.js</strong>.
                                Integrated backend APIs, optimized performance, and ensured cross-browser compatibility across devices.
                            </Paragraph>

                            <div style={{ marginTop: '12px' }}>
                                <Tag color="blue">MVP to Production</Tag>
                                <Tag color="geekblue">API Integration</Tag>
                                <Tag color="magenta">Agile Delivery</Tag>
                            </div>
                        </div>
                    ),
                },
            ]}
        />
    );
}
export default Experience;