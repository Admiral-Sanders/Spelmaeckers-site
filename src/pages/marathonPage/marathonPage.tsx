import { CodepenOutlined, HeartOutlined, HistoryOutlined, TeamOutlined } from '@ant-design/icons';
import { Row } from 'antd';
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

      {marathonChallengeCollection.items.length && (
        <SectionWrapper title="marathonPage.challengeTitle">
          {marathonChallengeCollection.items.map(renderChallenge)}
        </SectionWrapper>
      )}

      <div className="grayBackground">
        <SectionWrapper title="marathonPage.sonobegTitle">
          <div>
            <h2>Wie zijn we en wat doen we?</h2>
            <p>
              In alle stilte, proberen we al bijna 20 jaar, mensen in Beveren-Leie bij te staan en te helpen, die het
              moeilijk hebben om een plaats te krijgen of die door tegenslagen plots zwarte sneeuw zien. Gelukkig zorgt
              onze welvaartsmaatschappij voor veel vangnetten, zodat mensen overleven. Maar daar zijn ook grenzen aan en
              dan is er echte armoede, echte honger, …
            </p>
            <p>
              Misschien denk je, dit kan toch niet in Beveren-Leie. Weet je, mensen lopen daar niet mee te koop en
              gelukkig zijn dit uitzonderingen. Maar ook bij ons zijn er mensen die door tegenslagen in de armoedecirkel
              terechtkomen. We kunnen voor hen geen grootse dingen doen, maar wel dat sprankeltje hoop en geloof geven,
              dat ze er niet alleen voorstaan:
            </p>
            <ul>
              <li>
                door het betalen van een achterstallige schoolrekening of een bijdrage in een afrekening van de
                energiefactuur (die hoger was dan het voorzien budget)
              </li>
              <li>
                door het aankopen van wat huishoudspullen om een gezin een minimum aan comfort te geven (eind 2021
                hebben we voor ieder gezin één of meerdere huishoudtoestellen kunnen aankopen zoals frigo, diepvries,
                wasmachine, microgolfoven, …)
              </li>
              <li>
                door het geven van een pakket met fruit en groenten, koffie, olijfolie bovenop de voedselpakketten van
                het OCMW
              </li>
              <li>de enige wenskaart of geschenkje bezorgen bij hun verjaardag of eindejaar</li>
            </ul>
            <p>
              Dit gebeurt allemaal anoniem. Als we info doorkrijgen van mensen die een steuntje kunnen gebruiken, dan
              nemen we contact en enkel als de mensen zelf open staan voor onze hulp, komt er een vervolg. We zijn geen
              OCMW en bieden dus geen structurele financiële tussenkomsten aan.
            </p>
            <p>
              Wekelijks helpen we (samen met enkele extra vrijwilligers) voor de bedeling van voedselpakketten binnen
              onze parochie. Mensen die onder de armoedegrens leven of die tijdelijke hulp nodig hebben kunnen aanspraak
              maken op een gratis voedselpakket (mits het voorleggen van een voedselkaart). Deze pakketten moeten
              normaal opgehaald worden in de sociale winkel in Waregem (’t Kelderke, dit is een vrijwilligersorganisatie
              gesteund door de Waregemse Service Clubs), maar indien de betrokkenen niet in Waregem raken (ziek, werk)
              dan bezorgen wij die thuis.
            </p>
          </div>

          <div>
            <h2>Hoe kan je naast de spelmaerathon SoNoBeg steunen?</h2>
            <ul>
              <li>Via een storting of lopende opdracht op onze rekening BE97 7380 1021 6849.</li>
              <li>Door maaltijdcheques, waardebonnen, winkelcheques, cadeaubonnen, … te bezorgen</li>
            </ul>
            <p>Wees gerust, we hebben geen werkingskosten, alles wat we krijgen wordt goed besteed.</p>
            <p>
              Hartelijk dank aan allen die ons een warm hart toedragen, en neem gerust contact voor meer inlichtingen.
            </p>
            <ul>
              <li>Rony & Marleen Deprez Ter Weerst 25 Beveren-Leie tel: 0497/51.11.02</li>
              <li>Rik & Lea Meersman Akkerwindelaan 10 Beveren-Leie tel: 056/70.16.11</li>
            </ul>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default MarathonPage;
