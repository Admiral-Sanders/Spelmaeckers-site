import {
  DropboxOutlined,
  EuroCircleOutlined,
  NotificationOutlined,
  PushpinOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Col } from 'antd';
import React from 'react';
import './styles.scss';

interface Props {
  icon: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: { json: any };
}

const InfoBlock: React.FC<Props> = ({ icon, title, description }) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'QuestionCircleOutlined':
        return <QuestionCircleOutlined />;
      case 'PushpinOutlined':
        return <PushpinOutlined />;
      case 'EuroCircleOutlined':
        return <EuroCircleOutlined />;
      case 'DropboxOutlined':
        return <DropboxOutlined />;
      case 'NotificationOutlined':
        return <NotificationOutlined />;
    }
  };

  return (
    <Col sm={20} md={8} className="infoBlock">
      <div className="iconContainer">{renderIcon(icon)}</div>

      <h1 className="title">{title}</h1>

      <div className="description">{documentToReactComponents(description?.json)}</div>
    </Col>
  );
};

export default InfoBlock;
