import { Button, notification, Space } from 'antd';
import { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import './styles.scss';

interface Props {
  message: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const Notification: React.FC<Props> = ({ message, description, linkText, linkUrl }) => {
  const navigate = useNavigate();

  const actionClicked = () => {
    navigate(linkUrl);
    notification.destroy();
  };

  useEffect(() => {
    const openNotification = async () => {
      const btn = (
        <Space>
          <Button type="link" size="small" onClick={actionClicked}>
            {linkText}
          </Button>
        </Space>
      );

      notification.open({
        message,
        description,
        btn,
        duration: 0,
      });
    };
    openNotification();
  }, []);

  return <>{}</>;
};

export default Notification;
