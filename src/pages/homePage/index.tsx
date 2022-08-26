import { DownCircleOutlined } from '@ant-design/icons';
import { Affix } from 'antd';
import { Asset, useGetNewGamesQuery } from 'graphql/schema';
import AppFooter from 'layout/components/footer/footer';
import AppHeader from 'layout/components/header/header';
import PageLoader from 'layout/components/pageLoader/pageLoader';
import EventSection from '../../components/eventSection';
import GallerySection from '../../components/gallerySection';
import LinkSection from '../../components/linkSection';
import MembersSection from '../../components/membersSection';
import NumbersSection from '../../components/numbersSection';
import PracticalSection from '../../components/practicalSection';
import './styles.scss';

interface Props {}

const HomePage: React.FC<Props> = () => {
  const currentDate = new Date().toISOString();
  const { data, error, loading } = useGetNewGamesQuery();

  console.log(error); // TODO Use error handler
  if (loading) {
    return <PageLoader />;
  }

  const getImages = (assets: Partial<Asset | null>[]): string[] => {
    return assets.map((asset) => asset?.url || '').filter((url) => url.length);
  };

  return (
    <div>
      <div className="backdrop">
        <h1>De spelmaeckers</h1>
        <a href="#practical">
          <DownCircleOutlined className="scrollIcon" />
        </a>
      </div>

      <div className="content">
        <Affix offsetTop={0}>
          <AppHeader />
        </Affix>

        <div className="grayBackground" id="practical">
          <PracticalSection></PracticalSection>
        </div>

        <NumbersSection></NumbersSection>

        <div className="grayBackground">
          <EventSection currentDatetime={currentDate}></EventSection>
        </div>

        <GallerySection
          title="newGamesSection.title"
          images={getImages(data?.assetCollection?.items || [])}
        ></GallerySection>

        <LinkSection
          backgroundImage="https://despelmaeckers.be/images/link.png"
          link="http://eepurl.com/dts8Q5"
          text="linkSection.newsletter"
        ></LinkSection>

        <div className="grayBackground">
          <MembersSection></MembersSection>
        </div>

        <AppFooter />
      </div>
    </div>
  );
};

export default HomePage;
