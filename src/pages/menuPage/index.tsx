import { ConsumptionCollection, useGetConsumptionsQuery } from 'graphql/schema';
import MenuPage from './menuPage';
import './styles.scss';

interface Props {}

const MenuPageContainer: React.FC<Props> = () => {
  const { data } = useGetConsumptionsQuery();

  return (
    <div>
      {data && data.consumptionCollection && (
        <MenuPage consumptionCollection={data.consumptionCollection as ConsumptionCollection}></MenuPage>
      )}
    </div>
  );
};

export default MenuPageContainer;
