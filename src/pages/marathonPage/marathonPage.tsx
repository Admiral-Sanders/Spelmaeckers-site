import SectionWrapper from 'components/sectionWrapper';
import { MarathonChallenge, MarathonChallengeCollection } from 'graphql/schema';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface Props {
  marathonChallengeCollection: MarathonChallengeCollection;
}

const MarathonPage: React.FC<Props> = ({ marathonChallengeCollection }) => {
  const { t } = useTranslation();

  const renderChallenge = (item: MarathonChallenge | null) => {
    return (
      <div>
        <span>{item?.title}</span>
        <span>{item?.sponsorPrice}</span>
      </div>
    );
  };

  return (
    <>
      <div className="grayBackground">
        <SectionWrapper title="marathonPage.title">
          <p>{t('marathonPage.description')}</p>
        </SectionWrapper>
      </div>

      <SectionWrapper title="marathonPage.challengeTitle">
        {marathonChallengeCollection.items.map(renderChallenge)}
      </SectionWrapper>
    </>
  );
};

export default MarathonPage;
