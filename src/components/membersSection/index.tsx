import { Row } from 'antd';
import Loading from 'components/loading';
import SectionWrapper from 'components/sectionWrapper';
import { Member, useGetMembersQuery } from 'graphql/schema';
import MemberBlock from './components/memberBlock';
import './styles.scss';

interface Props {}

const MembersSection: React.FC<Props> = () => {
  const { data, error, loading } = useGetMembersQuery();

  console.log(error); // TODO Use error handler

  if (loading) {
    return <Loading />;
  }

  return (
    <SectionWrapper title="membersSection.title">
      <Row justify="center" gutter={64}>
        {
          data ? (
            data.memberCollection?.items.map(
              (member, i) => member && <MemberBlock key={i} member={member as Member}></MemberBlock>,
            )
          ) : (
            <p>No data</p>
          ) // TODO REPLACE WITH COMPONENT
        }
      </Row>
    </SectionWrapper>
  );
};

export default MembersSection;
