import { Row } from "antd";
import { QuestionCircleOutlined, PushpinOutlined, EuroCircleOutlined, DropboxOutlined, NotificationOutlined } from "@ant-design/icons";
import SectionWrapper from "components/sectionWrapper";
import InfoBlock from "./components/infoBlock";
import "./styles.scss";

interface Props {

}

const blocks: { title: string; description: string; icon: any; }[] = [
  { title: "Wat?", description: "Wij zijn een kleine, maar fijne spellenclub uit Beveren-Leie. Onze spelavonden zijn de uitgelezen kans om nieuwere gezelschapsspellen te leren kennen.", icon: QuestionCircleOutlined},
  { title: "Waar?", description: "De spellenavonden gaan door in OC De Kernelle, Kerkdreef 29 Beveren-Leie", icon: PushpinOutlined},
  { title: "Hoeveel?", description: "Voor een hele avond spelplezier betaal je 1 euro. Drank en versnaperingen aan betaalbare prijzen.", icon: EuroCircleOutlined},
  { title: "Spellen uitlenen", description: "Zolang we geen spellenavond mogen organiseren. Kan je voor €10 drie spellen uit onze collectie 'huren'. Deze spellen haal je af bij één van ons 3 in Kortrijk, Heule of Beveren-Leie. Tijdelijk geven we er ook 1 verrassingsspel bij. De spellen mag je  houden tot de volgende (fysieke) spelavond. Tenzij één van de gehuurde spellen door iemand anders aangevraagd worden. Maar sowieso mag je de spellen minimum 1 maand houden. Wanneer je nieuwe spellen wenst te huren, breng je de oude ook terug binnen. Spellen reserveren kan via onze facebookchat of mail: despelmaeckers@hotmail.com Snuisteren in onze collectie kan via boardgamegeek (usernaam: spelmaeckers) of via bordspellenbutler.", icon: DropboxOutlined},
  { title: "Ons inhuren", description: "Spelen zit in de lift. Steeds meer verenigingen en/of scholen plannen een spelletjesavond voor hun leden of als kasactie. Wij komen met 2 of meerdere demonstrateurs naar jullie clublokaal en stallen al onze spellen uit. De deelnemers kiezen wat ze willen spelen en wij leggen de spellen aan de tafel uit. In geen tijd krijgen we iedereen aan het spelen. Zelfs diegene die beweren niet graag te spelen.. Meer info kan u aanvragen via mail (despelmaeckers@hotmail.com) of telefonisch via 0472/57 89 48 (Davy).", icon: NotificationOutlined},
]

const PracticalSection: React.FC<Props> = () => {
  return (
    <SectionWrapper title="practicalSection.title">
      <Row className="infoRow">
        { blocks.map(block => <InfoBlock title={block.title} description={block.description} icon={block.icon}></InfoBlock>)}
      </Row>
    </SectionWrapper>
  );
};

export default PracticalSection;