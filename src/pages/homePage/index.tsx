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
    "https://www.despelmaeckers.be/wp-content/uploads/2020/08/999-games-de-crew-999cre01-8665-0-500x357.jpg",
    "https://www.despelmaeckers.be/wp-content/uploads/2020/09/775499-700x500.jpg",
    "https://www.despelmaeckers.be/wp-content/uploads/2020/08/azul-630x450.jpg",
    "https://www.despelmaeckers.be/wp-content/uploads/2020/08/smartphone-inc01-500x762-500x357.jpg"
  ];

  return (
    <div>
      <div className="backdrop">

      </div>

      <div className="content">
        <div className="grayBackground">
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