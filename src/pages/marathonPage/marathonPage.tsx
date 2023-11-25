import { CodepenOutlined, HeartOutlined, HistoryOutlined, TeamOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import InfoBlock from 'components/infoBlock';
import SectionWrapper from 'components/sectionWrapper';
import { MarathonChallenge, MarathonChallengeCollection } from 'graphql/schema';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface Props {
  marathonChallengeCollection: MarathonChallengeCollection;
}

const numbers = [
  {
    title: '24 uur',
    icon: <HistoryOutlined />,
  },
  {
    title: '3 Spelmaeckers',
    icon: <TeamOutlined />,
  },
  {
    title: 'Veel spellen',
    icon: <CodepenOutlined />,
  },
  {
    title: '1 Goed doel',
    icon: <HeartOutlined />,
  },
];

const MarathonPage: React.FC<Props> = ({ marathonChallengeCollection }) => {
  const { t } = useTranslation();

  const renderChallenge = (item: MarathonChallenge | null) => {
    return (
      <div className="challenge challenge__row">
        <span className="challenge__title">{item?.title}</span>
        <span className="challenge__price">€{item?.sponsorPrice}</span>
      </div>
    );
  };

  return (
    <div className="marathonPage">
      <div className="grayBackground">
        <SectionWrapper title="marathonPage.title">
          <p className="text-center">
            {t('marathonPage.description')}

            <a href={'https://forms.gle/Cvt9xuuUMowz4c628'} target="_blank" className="btn call-to-action ">
              {t('marathonPage.callToAction')}
            </a>
          </p>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <Row className="infoRow">
          {numbers.map((item) => (
            <InfoBlock key={item.title} title={item.title || ''} icon={item.icon} md={12}></InfoBlock>
          ))}
        </Row>
      </SectionWrapper>

      <div className="grayBackground">
        <SectionWrapper title="marathonPage.sonobegTitle">
          <h2>Wie zijn we en wat doen we?</h2>
          <p>
            In alle stilte, proberen we al meer dan 18 jaar, mensen bij te staan en te helpen, die het in onze Beverse
            gemeenschap moeilijk hebben om een plaats te krijgen of die door tegenslagen plots zwarte sneeuw zien.
            Gelukkig zorgt onze welvaartsmaatschappij voor veel vangnetten, zodat mensen overleven. Maar daar zijn ook
            grenzen aan en dan is er echte armoede, echte honger, ...
          </p>
          <p>
            Miscchien denk je, dit kan toch in Beveren. Weet je, mensen lopen daar niet mee te koop en gelukkige zijn
            dit uitzonderingen. Maar ook bij ons zij er mensen die in de armoedecirkel terechtkomen. We kunnen voor hen
            geen grootse dingen doen, maar wel dat sprankeltje hoop en geloof geven, dat ze er niet alleen voorstaan:
          </p>
          <ul>
            <li>Door het aankopen van huishoudspullen om een gezin een minimum aan comfort te geven</li>
            <li>
              Door het geven van een pakket met fruit en groenten, koffie, olijfolie bovenop de voedselpakketten van het
              OCMW
            </li>
          </ul>
          <p>We zij geen OCMW en bieden gus geen stucturele financiele tussenkomsten</p>
          <h2>Kan ik SoNoBeg aanspreken?</h2>
          <p>
            Misschien heb je het op dit moment moeilijk om rond te komen of misschien ken je iemand die hulp kan
            gebruiken. Neem dan gerust contact op met ons. We kunnen dan samen kijken of we iets kunnen doen. Discretie
            gegarandeerd.
          </p>
          <ul>
            <li>Rik Meersman: 056/70 16 11</li>
            <li>Rony Deprez: 0497/51 11 02</li>
          </ul>
        </SectionWrapper>
      </div>

      {marathonChallengeCollection.items.length && (
        <SectionWrapper title="marathonPage.challengeTitle">
          {marathonChallengeCollection.items.map(renderChallenge)}
        </SectionWrapper>
      )}
    </div>
  );
};

export default MarathonPage;
