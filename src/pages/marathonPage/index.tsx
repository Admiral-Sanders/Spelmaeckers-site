import { Affix } from 'antd';
import {
  ConsumptionCollection,
  MarathonChallengeCollection,
  useGetConsumptionsQuery,
  useGetMarathonChallengeQuery,
} from 'graphql/schema';
import AppHeader from 'layout/components/header/header';
import MarathonPage from './marathonPage';
import './styles.scss';

interface Props {}

const MarathonPageContainer: React.FC<Props> = () => {
  const { data } = useGetMarathonChallengeQuery({ variables: { year: 2024 } });

  return (
    <div className="marathonPage">
      <Affix offsetTop={0}>
        <AppHeader />
      </Affix>

      {data && data.marathonChallengeCollection && (
        <MarathonPage
          marathonChallengeCollection={data.marathonChallengeCollection as MarathonChallengeCollection}
        ></MarathonPage>
      )}
    </div>
  );
};

export default MarathonPageContainer;
