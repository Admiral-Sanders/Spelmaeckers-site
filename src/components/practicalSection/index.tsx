import { Row } from 'antd';
import SectionWrapper from 'components/sectionWrapper';
import { PracticalItemCollection } from 'graphql/schema';
import { orderSorter } from 'utils/sorter';
import InfoBlock from '../infoBlock';
import './styles.scss';

interface Props {
  practicalItemCollection?: PracticalItemCollection;
}

const PracticalSection: React.FC<Props> = ({ practicalItemCollection }) => {
  return (
    <SectionWrapper title="practicalSection.title">
      <Row className="infoRow">
        {orderSorter(practicalItemCollection?.items || []).map((item) => (
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
