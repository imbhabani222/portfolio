import React from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import logo from "../assets/logo.jpg";
import { NAV_ITEMS } from "../Utils/constant"
const { Content, Sider } = Layout;
const SideComp = () => {
    return (
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
            <div className="logo" >
                <img
                    src={logo}
                    alt="Coding"
                    style={{
                        width: "50px",
                        height: "50px",
                        marginLeft: "24px",
                        marginTop: "24px",
                        marginBottom:"24px",
                        maxWidth: "100%",
                        borderRadius: "50%",
                        border: "2px solid white"
                    }}
                /></div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[NAV_ITEMS?.[0]?.key]}
                items={NAV_ITEMS}

            />
        </Sider>
    )
}

export default SideComp