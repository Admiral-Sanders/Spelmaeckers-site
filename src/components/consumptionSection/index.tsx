import { Row } from 'antd';
import Loading from 'components/loading';
import SectionWrapper from 'components/sectionWrapper';
import { Consumption, useGetConsumptionsQuery } from 'graphql/schema';
import ConsumptionBlock from './components/consumptionBlock';
import './styles.scss';

interface Props {}

const ConsumptionSection: React.FC<Props> = () => {
  const { data, error, loading } = useGetConsumptionsQuery();

  console.log(error); // TODO Use error handler

  if (loading) {
    return <Loading />;
  }

  return (
    <SectionWrapper title="consumptionSection.title">
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

export default ConsumptionSection;
