import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import HeaderComp from "../../components/HeaderComp";
import FooterComp from "../../components/FooterComp";

const { Content } = Layout;

const PortfolioLayout = () => {
  return (
    <Layout>
      <Layout>
        <HeaderComp />

        <Content
          style={{
            background:
              "linear-gradient(135deg, #001529 0%, #001f3a 30%, #002b52 60%, #004080 100%)",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
            }}
          >
            <Outlet />
          </div>
        </Content>

        <FooterComp />
      </Layout>
    </Layout>
  );
};

export default PortfolioLayout;