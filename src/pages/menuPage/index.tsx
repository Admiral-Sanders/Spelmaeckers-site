import Loading from 'components/loading';
import { useGetConsumptionsQuery } from 'graphql/schema';
import PageLoader from 'layout/components/pageLoader/pageLoader';
import './styles.scss';

interface Props {}

const MenuPage: React.FC<Props> = () => {
  const { data, error, loading } = useGetConsumptionsQuery();

  if (loading) {
    return <PageLoader />;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default MenuPage;
