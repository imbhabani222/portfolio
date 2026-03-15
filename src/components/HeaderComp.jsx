import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { NAV_ITEMS } from "../Utils/constant"

const { Header } = Layout;

const HeaderComp = () => {
    console.log(NAV_ITEMS)
    const [current, setCurrent] = useState(NAV_ITEMS?.[0]?.key);
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <Header style={{ padding: 0 }}>
            <Menu
                style={{ display: "flex", justifyContent: "end" }}
                theme="dark"
                mode="horizontal"
                items={NAV_ITEMS}
                selectedKeys={[current]}
                onClick={onClick}
            />
        </Header>
    );
};

export default HeaderComp;