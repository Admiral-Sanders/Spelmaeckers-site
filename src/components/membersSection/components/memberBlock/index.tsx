import { FacebookOutlined } from '@ant-design/icons';
import { Col } from 'antd';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Maybe, Member } from 'graphql/schema';
import { Link } from 'react-router-dom';
import './styles.scss';

interface Props {
  member: any; // Fix type
}

const MemberBlock: React.FC<Props> = ({ member }) => {
  return (
    <Col sm={20} md={6} className="memberBlock">
      <img src={member?.profilePicture?.url} alt={`Profile picture of ${name}`}></img>
      <h1 className="memberTitle">{member?.name}</h1>
      <div className="description">{documentToReactComponents(member?.description?.json)}</div>

      <Link to={{ pathname: member?.facebookLink || '' }} target="_blank" className="fbLink">
        <FacebookOutlined />
      </Link>
    </Col>
  );
};

export default MemberBlock;
