import { Affix } from 'antd';
import { ConsumptionCollection, useGetConsumptionsQuery } from 'graphql/schema';
import AppHeader from 'layout/components/header/header';
import MenuPage from './menuPage';
import './styles.scss';

interface Props {}

const MenuPageContainer: React.FC<Props> = () => {
  const { data } = useGetConsumptionsQuery();

  return (
    <>
      <Affix>
        <AppHeader title="header.menuPage" />
      </Affix>
      <div className="menuPage bg-shroomHaze">
        {data && data.consumptionCollection && (
          <MenuPage consumptionCollection={data.consumptionCollection as ConsumptionCollection}></MenuPage>
        )}
      </div>
    </>
  );
};

export default MenuPageContainer;
