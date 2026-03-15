import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import CardComp from './CardComp';
import SideComp from './SideComp';
const { Content } = Layout;
const PortfolioLayout = () => {
    return (
        <Layout>
            {/* <SideComp /> */}
            <Layout>
                <HeaderComp />
                <Content
                    style={{
                        background: 'linear-gradient(135deg, #001529 0%, #001f3a 30%, #002b52 60%, #004080 100%)',
                    }}
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
        </Layout >
    );
}
export default PortfolioLayout;