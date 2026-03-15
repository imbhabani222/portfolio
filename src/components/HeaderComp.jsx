import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/logo.jpg";
import { NAV_ITEMS } from "../Utils/constant";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const HeaderComp = () => {
    const [current, setCurrent] = useState(NAV_ITEMS?.[0]?.key);
    const [open, setOpen] = useState(false);

    const screens = useBreakpoint();

    const onClick = (e) => {
        setCurrent(e.key);
        setOpen(false);
    };

    return (
        <>
            <Header
                style={{
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap:"50%"
                }}
            >
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        border: "2px solid white",
                    }}
                />

                {/* Desktop Menu */}
                {screens.md && (
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        items={NAV_ITEMS}
                        selectedKeys={[current]}
                        onClick={onClick}
                        style={{ flex: 1, marginLeft: "40px" }}
                    />
                )}

                {/* Mobile Hamburger */}
                {!screens.md && (
                    <Button
                        type="text"
                        icon={<MenuOutlined style={{ color: "white", fontSize: 20 }} />}
                        onClick={() => setOpen(true)}
                    />
                )}
            </Header>

            {/* Mobile Drawer Menu */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
            >
                <Menu
                    mode="vertical"
                    items={NAV_ITEMS}
                    selectedKeys={[current]}
                    onClick={onClick}
                />
            </Drawer>
        </>
    );
};

export default HeaderComp;