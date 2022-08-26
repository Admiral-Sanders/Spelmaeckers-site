import { Col, Row } from 'antd';
import Loading from 'components/loading';
import PriceSection from 'components/priceSection';
import SectionWrapper from 'components/sectionWrapper';
import { Focusnumber, useGetFocusNumbersQuery } from 'graphql/schema';
import sortItems from 'utils/sorter';
import './styles.scss';

interface Props {}

const NumbersSection: React.FC<Props> = () => {
  const { data, error, loading } = useGetFocusNumbersQuery();

  console.log(error); // TODO Use error handler

  if (loading) {
    return <Loading />;
  }

  const renderNumberBlock = (item: Focusnumber) => {
    return (
      <Col key={item.title} sm={20} md={6} className="numberBlock">
        <h1>{item.number}</h1>
        <p>{item.title}</p>
      </Col>
    );
  };

  const getCurrentCounter = (items: Focusnumber[]): number => {
    return items.find((item) => item.title === 'Spelmaeckers')?.number || 10000000;
  };

  return (
    <SectionWrapper title="numbersSection.title">
      <Row gutter={200} justify="center" className="numbersRow">
        {sortItems(data?.focusnumberCollection?.items || []).map((number) => renderNumberBlock(number))}
      </Row>

      <PriceSection
        currentCounter={getCurrentCounter((data?.focusnumberCollection?.items as Focusnumber[]) || [])}
      ></PriceSection>
    </SectionWrapper>
  );
};

export default NumbersSection;
