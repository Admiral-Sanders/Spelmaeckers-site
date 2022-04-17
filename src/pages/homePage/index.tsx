import { DownCircleOutlined } from "@ant-design/icons";
import { Affix } from "antd";
import { Header } from "antd/lib/layout/layout";
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
  const images = [
    "https://cf.geekdo-images.com/SoClIcwjDo_iZs0idVikDw__opengraph/img/Oi4Yub0J7r6VqnQv0jzeG8keTMk=/fit-in/1200x630/filters:strip_icc()/pic4848330.jpg",
    "https://www.board-game.co.uk/wp-content/uploads/2020/06/Azul-Summer-Pavilion.jpg",
    "https://cf.geekdo-images.com/Ndctxvd7kBXYubeYRKRqzw__opengraph/img/ICTqakLDPah8-kJwhMKhccTlt4o=/fit-in/1200x630/filters:strip_icc()/pic4258616.jpg",
    "https://www.999games.nl/pub/media/catalog/product/D/e/DeCrew_L.png",
    "https://media.s-bol.com/qxY1nDYAOG67/550x720.jpg"
  ];

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
        <PriceSection></PriceSection>

        <div className="grayBackground">
          <EventSection></EventSection>
        </div>

        <GallerySection title="newGamesSection.title" images={images}></GallerySection>

        <LinkSection backgroundImage="https://berlinspectator.com/wp-content/uploads/2022/02/board-games-settlers-of-catan-free-001.jpg" link="http://eepurl.com/dts8Q5" text="linkSection.newsletter"></LinkSection>

        <div className="grayBackground">
          <MembersSection></MembersSection>
        </div>
      </div>
    </div>
  );
};

export default HomePage;