import { isTSEntityName } from '@babel/types';
import { Col, Row } from 'antd';
import Loading from 'components/loading';
import { useGetNumberPricesQuery } from 'graphql/schema';
import './styles.scss';

interface Props {
  currentCounter: Number;
}

const PriceSection: React.FC<Props> = ({ currentCounter }) => {
  const { data, error, loading } = useGetNumberPricesQuery({
    variables: {
      currentCounter: currentCounter,
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="priceSection">
      <p>
        Elke honderdste bezoeker krijgt van ons een gloednieuw spel cadeau. Ontdek snel wat de volgende spellen zijn en
        wie weet neem jij ze de volgende keer wel mee naar huis!
      </p>

      <Row justify="center">
        {data?.numberpriceCollection?.items?.map((item, i) => (
          <Col sm={20} md={6} key={i}>
            <img src={item?.image?.url || ''} alt="" />
            <h1>{item?.number || ''}</h1>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PriceSection;
