import { Row } from 'antd';
import ConsumptionBlock from 'components/consumptionSection/components/consumptionBlock';
import SectionWrapper from 'components/sectionWrapper';
import { Consumption, useGetConsumptionsQuery } from 'graphql/schema';
import './styles.scss';

interface Props {}

const MenuPage: React.FC<Props> = () => {
  const { data } = useGetConsumptionsQuery();

  // console.log(data);

  // return <div>{JSON.stringify(data)}</div>;

  return (
    <SectionWrapper title="">
      <Row justify="center" gutter={64}>
        {
          data ? (
            data.consumptionCollection?.items.map(
              (consumption, i) =>
                consumption && <ConsumptionBlock key={i} consumption={consumption as Consumption}></ConsumptionBlock>,
            )
          ) : (
            <p>No data</p>
          ) // TODO REPLACE WITH COMPONENT
        }
      </Row>
    </SectionWrapper>
  );
};

export default MenuPage;
