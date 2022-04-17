import { Col, Row } from "antd";
import SectionWrapper from "components/sectionWrapper";
import { string } from "yargs";
import "./styles.scss";

interface Props {

}

const numbers = [
  { title: "Jaar bezig", number: 15 },
  { title: "Spelavonden per jaar", number: 10 },
  { title: "Spelletjes", number: 1037 },
  { title: "Spelmaeckers", number: 8064 }
]

const NumbersSection: React.FC<Props> = () => {
  const renderNumberBlock = (item: { title: string; number: number }) => {
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
        { numbers.map(number => (renderNumberBlock(number)))}
      </Row>
    </SectionWrapper>
  );
};

export default NumbersSection;