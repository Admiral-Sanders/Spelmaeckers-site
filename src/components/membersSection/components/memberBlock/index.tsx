import { FacebookOutlined } from "@ant-design/icons";
import { Col } from "antd";
import { Link } from "react-router-dom";
import "./styles.scss";

export interface Member {
  name: string;
  description: string;
  image: string;
  facebookLink: string;
}

interface Props {
  member: Member;
}

const MemberBlock: React.FC<Props> = ({ member }) => {
  const { name, description, image, facebookLink } = member;

  return (
    <Col sm={20} md={6} className="memberBlock">
      <img src={image} alt={`Profile picture of ${name}`}></img>
      <h1 className="memberTitle">{ name }</h1>
      <p>{description}</p>

      <Link to={{ pathname: facebookLink }} target="_blank" className="fbLink">
        <FacebookOutlined />
      </Link>
    </Col>
  );
};

export default MemberBlock;
