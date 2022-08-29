import { ConsumptionCollection, useGetConsumptionsQuery } from 'graphql/schema';
import PageLoader from 'layout/components/pageLoader/pageLoader';
import { useSelector } from 'react-redux';
import './styles.scss';

interface Props {
  consumptionCollection?: ConsumptionCollection;
}

const MenuPage: React.FC<Props> = ({ consumptionCollection }) => {
  return <div>{JSON.stringify(consumptionCollection)}</div>;
};

export default MenuPage;
