import { ConsumptionCollection, useGetConsumptionsQuery } from 'graphql/schema';
import PageLoader from 'layout/components/pageLoader/pageLoader';
import { useSelector } from 'react-redux';
import MenuPage from './menuPage';
import './styles.scss';

interface Props {}

const MenuPageContainer: React.FC<Props> = () => {
  const requestCounter = useSelector((state: any) => state.graphql.requestCounter);

  const { data: consumptionRequest } = useGetConsumptionsQuery();

  if (requestCounter > 0) {
    return <PageLoader />;
  }

  return (
    <>
      {consumptionRequest && (
        <MenuPage consumptionCollection={consumptionRequest.consumptionCollection as ConsumptionCollection} />
      )}
    </>
  );
};

export default MenuPageContainer;
