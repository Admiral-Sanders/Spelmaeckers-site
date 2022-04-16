import { Col } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  icon: any;
  title: string;
  description: string;
}

const InfoBlock: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <Col sm={20} md={8} className="infoBlock">
      <div className="iconContainer">
        {React.createElement(icon)}
      </div>

      <h1 className="title">{ title }</h1>

      <p>{ description }</p>
    </Col>
  );
};

export default InfoBlock;