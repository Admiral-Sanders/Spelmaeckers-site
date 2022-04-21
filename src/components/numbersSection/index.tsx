import { Col, Row } from "antd";
import SectionWrapper from "components/sectionWrapper";
import { Focusnumber, Maybe, useGetFocusNumbersQuery } from "graphql/schema";
import { string } from "yargs";
import "./styles.scss";

interface Props {

}

const sortItems = (items: any[]): any[] => {
  return [...items].sort((a, b) => (a?.order || 99) > (b?.order || 99) ? 1 : -1)
}


const NumbersSection: React.FC<Props> = () => {
  const { data, error, loading } = useGetFocusNumbersQuery();

  if (loading) {
    return <p>Loading</p>; //TODO FIX LOADING
  }

  const renderNumberBlock = (item: Focusnumber) => {
    return (
      <Col key={item.title} sm={20} md={6} className="numberBlock">
        <h1>{item.number}</h1>
        <p>{item.title}</p>
      </Col>
    );
  }
  return (
    <SectionWrapper title="numbersSection.title">
      <Row gutter={200} justify="center" className="numbersRow">
        { sortItems(data?.focusnumberCollection?.items || []).map((number) => renderNumberBlock(number))}
      </Row>
    </SectionWrapper>
  );
};

export default NumbersSection;