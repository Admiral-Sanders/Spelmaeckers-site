import { Row } from 'antd';
import Loading from 'components/loading';
import SectionWrapper from 'components/sectionWrapper';
import { Member, MemberCollection } from 'graphql/schema';
import MemberBlock from './components/memberBlock';
import './styles.scss';

interface Props {
  memberCollection?: MemberCollection;
}

const MembersSection: React.FC<Props> = ({ memberCollection }) => {
  return (
    <SectionWrapper title="membersSection.title">
      <Row justify="center" gutter={64}>
        {
          memberCollection ? (
            memberCollection?.items.map(
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
