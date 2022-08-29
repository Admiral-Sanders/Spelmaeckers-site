import { Row } from 'antd';
import Loading from 'components/loading';
import SectionWrapper from 'components/sectionWrapper';
import { PracticalItemCollection } from 'graphql/schema';
import sortItems from 'utils/sorter';
import InfoBlock from './components/infoBlock';
import './styles.scss';

interface Props {
  practicalItemCollection?: PracticalItemCollection;
}

const PracticalSection: React.FC<Props> = ({ practicalItemCollection }) => {
  return (
    <SectionWrapper title="practicalSection.title">
      <Row className="infoRow">
        {sortItems(practicalItemCollection?.items || []).map((item) => (
          <InfoBlock
            key={item?.title}
            title={item?.title || ''}
            description={item?.description || ''}
            icon={item?.icon}
          ></InfoBlock>
        ))}
      </Row>
    </SectionWrapper>
  );
};

export default PracticalSection;
