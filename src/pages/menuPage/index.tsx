import { useGetConsumptionsQuery } from 'graphql/schema';
import PageLoader from 'layout/components/pageLoader/pageLoader';
import { useSelector } from 'react-redux';
import './styles.scss';

interface Props {}

const MenuPage: React.FC<Props> = () => {
  const { data, error } = useGetConsumptionsQuery();
  const requestCounter = useSelector((state: any) => state.graphql.requestCounter);

  console.log(error); // TODO Use error handler

  if (requestCounter > 0) {
    return <PageLoader />;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default MenuPage;
