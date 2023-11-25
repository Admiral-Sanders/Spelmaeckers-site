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
      <Col span={16} offset={4}>
        <div className="challenge challenge__row">
          <span className="challenge__title">{item?.title}</span>
          <span className="challenge__price">€{item?.sponsorPrice}</span>
        </div>
      </Col>
    );
  };

  return (
    <div className="marathonPage">
      <div className="grayBackground">
        <SectionWrapper title="marathonPage.title">
          <p>
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
        <div className="grayBackground">
          <SectionWrapper title="marathonPage.challengeTitle">
            {marathonChallengeCollection.items.map(renderChallenge)}
          </SectionWrapper>
        </div>
      )}
    </div>
  );
};

export default MarathonPage;
