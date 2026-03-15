import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const CardComp = ({ icon, title, description }) => {
  return (
    <Card hoverable className="stats-card" bodyStyle={{ padding: 0 }}>
      <div className="card-body">
        <div className="card-icon">{icon}</div>

        <Title level={3} className="card-title">
          {title}
        </Title>

        <Text className="card-text">{description}</Text>
      </div>
    </Card>
  );
};

export default CardComp;