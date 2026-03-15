import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/logo.jpg";
import { NAV_ITEMS } from "../Utils/constant";
import styles from "../styles/header.module.css";

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
      <Header className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />

        {/* Desktop Menu */}
        {screens.md && (
          <Menu
            theme="dark"
            mode="horizontal"
            items={NAV_ITEMS}
            selectedKeys={[current]}
            onClick={onClick}
            className={styles.desktopMenu}
          />
        )}

        {/* Mobile Hamburger */}
        {!screens.md && (
          <Button
            type="text"
            icon={<MenuOutlined className={styles.menuButton} />}
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