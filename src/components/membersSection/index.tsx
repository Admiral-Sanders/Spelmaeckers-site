import { Row } from "antd";
import SectionWrapper from "components/sectionWrapper";
import { useGetMembersQuery } from "graphql/schema";
import MemberBlock from "./components/memberBlock";
import "./styles.scss";

interface Props {

}

const MembersSection: React.FC<Props> = () => {
  const { data, error, loading } = useGetMembersQuery();

  if (loading) {
    return <p>Loading</p>; //TODO FIX LOADING
  }

  return (
    <SectionWrapper title="membersSection.title">
      <Row justify="center" gutter={64}>
        { data ? 
          data.memberCollection?.items.map((member, i) => member && <MemberBlock key={i} member={member}></MemberBlock>) :
          <p>No data</p> // TODO REPLACE WITH COMPONENT
        }
      </Row>
    </SectionWrapper>
  );
};

export default MembersSection;