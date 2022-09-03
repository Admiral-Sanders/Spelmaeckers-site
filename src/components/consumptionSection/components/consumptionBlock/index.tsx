import { FacebookOutlined } from '@ant-design/icons';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Col } from 'antd';
import { Consumption } from 'graphql/schema';
import { Link } from 'react-router-dom';
import './styles.scss';

interface Props {
  consumption: Consumption;
}

const ConsumptionBlock: React.FC<Props> = ({ consumption }) => {
  return (
    <Col sm={20} md={6} className="consumptionBlock">
      <h1 className="consumptionTitle">{consumption?.name}</h1>
      <h2 className="consumptionTitle">{consumption?.category}</h2>
      <h2 className="consumptionTitle">{consumption?.ticketAmount}</h2>
    </Col>
  );
};

export default ConsumptionBlock;
