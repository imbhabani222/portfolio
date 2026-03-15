import { CalendarOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import CardComp from './CardComp';
const { Content, Sider } = Layout;
const PortfolioLayout = () => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `nav ${index + 1}`,
                        }),
                    )}
                />
            </Sider>
            <Layout>
                <HeaderComp />
                <Content
                    // style={{
                    //     background: 'linear-gradient(to right,  #1e3a5f, #4085d3, #bfdbfe)'
                    // }}
                >

                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: "100vh"
                        }}
                    >
                        <CardComp
                            icon={<CalendarOutlined />}
                            title="4+ Years"
                            description="Experience" />
                       
                    </div>
                </Content>
                <FooterComp />
            </Layout>
        </Layout>
    );
}
export default PortfolioLayout;