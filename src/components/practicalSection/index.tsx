import { Row } from 'antd';
import Loading from 'components/loading';
import SectionWrapper from 'components/sectionWrapper';
import { useGetPracticalItemsQuery } from 'graphql/schema';
import sortItems from 'utils/sorter';
import InfoBlock from './components/infoBlock';
import './styles.scss';

interface Props {}

const PracticalSection: React.FC<Props> = () => {
  const { data, error, loading } = useGetPracticalItemsQuery();

  if (loading) {
    return <Loading />;
  }

  return (
    <SectionWrapper title="practicalSection.title">
      <Row className="infoRow">
        {sortItems(data?.practicalItemCollection?.items || []).map((item) => (
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
