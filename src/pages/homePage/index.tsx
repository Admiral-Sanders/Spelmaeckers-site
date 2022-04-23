import { DownCircleOutlined } from "@ant-design/icons";
import { Affix } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Asset, useGetNewGamesQuery } from "graphql/schema";
import AppHeader from "layout/components/header/header";
import { Link } from "react-router-dom";
import EventSection from "../../components/eventSection";
import GallerySection from "../../components/gallerySection";
import LinkSection from "../../components/linkSection";
import MembersSection from "../../components/membersSection";
import NumbersSection from "../../components/numbersSection";
import PracticalSection from "../../components/practicalSection";
import PriceSection from "../../components/priceSection";
import "./styles.scss";

interface Props {

}

const HomePage: React.FC<Props> = () => {
  const { data, error, loading } = useGetNewGamesQuery();

  if (loading) {
    return <p>Loading</p>; //TODO FIX LOADING
  }

  const getImages = (assets: Partial<Asset|null>[]): string[] => {
    return assets.map(asset => asset?.url || "").filter(url => url.length);
  }

  return (
    <div>
      <div className="backdrop">
        <h1>De spelmaeckers</h1>
        <a href="#practical">
          <DownCircleOutlined className="scrollIcon"/>
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
          <EventSection></EventSection>
        </div>

        <GallerySection title="newGamesSection.title" images={getImages(data?.assetCollection?.items || [])}></GallerySection>

        <LinkSection backgroundImage="https://berlinspectator.com/wp-content/uploads/2022/02/board-games-settlers-of-catan-free-001.jpg" link="http://eepurl.com/dts8Q5" text="linkSection.newsletter"></LinkSection>

        <div className="grayBackground">
          <MembersSection></MembersSection>
        </div>
      </div>
    </div>
  );
};

export default HomePage;