import { Col, Row } from "antd";
import "./styles.scss";

interface Props {

}

const PriceSection: React.FC<Props> = () => {
  return (
    <div className="priceSection">
      <p>Elke honderdste bezoeker krijgt van ons een gloednieuw spel cadeau. Ontdek snel wat de volgende spellen zijn en wie weet neem jij ze de volgende keer wel mee naar huis!</p>

      <Row justify="center">
        <Col sm={20} md={6}>
          <img src="https://cf.geekdo-images.com/aE1EoOzr530gQin8bj8QDA__opengraph/img/Ip_wNsctDhhyrurz1ESMfwCdaOU=/fit-in/1200x630/filters:strip_icc()/pic4460401.jpg" alt="" />
          <h1>8000</h1>
        </Col>
        <Col sm={20} md={6}>
          <img src="https://d361rg3bm4p0ta.cloudfront.net/items/59/img_4659_MAIN.png" alt="" />
          <h1>8100</h1>
        </Col>
      </Row>
    </div>
  );
};

export default PriceSection;