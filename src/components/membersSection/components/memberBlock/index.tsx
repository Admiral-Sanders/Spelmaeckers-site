import { FacebookOutlined } from '@ant-design/icons';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Col } from 'antd';
import { Member } from 'graphql/schema';
import { Link } from 'react-router-dom';
import './styles.scss';

interface Props {
  member: Member;
}

const MemberBlock: React.FC<Props> = ({ member }) => {
  return (
    <Col sm={20} md={6} className="memberBlock">
      {member?.profilePicture?.url && <img src={member.profilePicture.url} alt={`Profile picture of ${name}`} />}
      <h1 className="memberTitle">{member?.name}</h1>
      <div className="description">{documentToReactComponents(member?.description?.json)}</div>

      <Link to={{ pathname: member?.facebookLink || '' }} target="_blank" className="fbLink">
        <FacebookOutlined />
      </Link>
    </Col>
  );
};

export default MemberBlock;
