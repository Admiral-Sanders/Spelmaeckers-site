import { DownCircleOutlined } from '@ant-design/icons';
import { Affix } from 'antd';
import {
  Asset,
  AssetCollection,
  EventCollection,
  FocusnumberCollection,
  MemberCollection,
  PracticalItemCollection,
} from 'graphql/schema';
import AppFooter from 'layout/components/footer/footer';
import AppHeader from 'layout/components/header/header';
import { HashLink } from 'react-router-hash-link';
import EventSection from '../../components/eventSection';
import GallerySection from '../../components/gallerySection';
import LinkSection from '../../components/linkSection';
import MembersSection from '../../components/membersSection';
import NumbersSection from '../../components/numbersSection';
import PracticalSection from '../../components/practicalSection';
import './styles.scss';

interface Props {
  assetCollection?: AssetCollection;
  practicalItemCollection?: PracticalItemCollection;
  focusnumberCollection?: FocusnumberCollection;
  eventCollection?: EventCollection;
  memberCollection?: MemberCollection;
}

const HomePage: React.FC<Props> = ({
  assetCollection,
  practicalItemCollection,
  focusnumberCollection,
  eventCollection,
  memberCollection,
}) => {
  const getImages = (assets: Partial<Asset | null>[]): string[] => {
    return assets.map((asset) => asset?.url || '').filter((url) => url.length);
  };

  return (
    <div>
      <div className="backdrop">
        <h1>De spelmaeckers</h1>
        <HashLink to="/#practical">
          <DownCircleOutlined className="scrollIcon" />
        </HashLink>
      </div>

      <div className="content">
        <Affix offsetTop={0}>
          <AppHeader />
        </Affix>

        <div className="grayBackground" id="practical">
          <PracticalSection practicalItemCollection={practicalItemCollection}></PracticalSection>
        </div>

        <NumbersSection focusnumberCollection={focusnumberCollection}></NumbersSection>

        <div className="grayBackground">
          <EventSection eventCollection={eventCollection}></EventSection>
        </div>

        <GallerySection title="newGamesSection.title" images={getImages(assetCollection?.items || [])}></GallerySection>

        <LinkSection
          backgroundImage="https://despelmaeckers.be/images/link.png"
          link="http://eepurl.com/dts8Q5"
          text="linkSection.newsletter"
        ></LinkSection>

        <div className="grayBackground">
          <MembersSection memberCollection={memberCollection}></MembersSection>
        </div>

        <AppFooter />
      </div>
    </div>
  );
};

export default HomePage;
