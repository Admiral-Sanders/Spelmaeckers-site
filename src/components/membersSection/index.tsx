import { Row } from "antd";
import SectionWrapper from "components/sectionWrapper";
import MemberBlock, { Member } from "./components/memberBlock";
import "./styles.scss";

interface Props {

}

const members: Member[] = [
  {
    name: "Davy Beatens",
    description: "Dit is Davy Baetens, 33 jaar jong en gebeten en bezeten door bordspellen. In 2007 richtte hij samen met Fred de spelmaeckers op. Hij laat mensen kennis maken met het betere bordspel en probeert zo de microbe door te geven. Davy is een echte euro-gamer en dus niet echt fan van een goed Fred-spel. Als je dus aan Davy vraagt om een spel te kiezen dan zal hij om te lachen wijzen naar de blauwe bakken.",
    facebookLink: "https://www.facebook.com/davy.baetens",
    image: "http://www.fredece249.249.axc.nl/wp-content/uploads/2020/09/119663026_758007291644922_7626706140734885143_n.jpg"
  },
  {
    name: "Frederiek Meersman",
    description: "Frederiek (roepnaam: Fred) stampte een tiental jaren terug de beginselen van De Spelmaeckers uit de grond. Regelmatig ging er dan ook een spellenavond door in de living van zijn ouderlijke thuis. Net daarom besliste het vallende muntje dan ook om Fred tot voorzitter te bestempelen. Een taak die hij tot op heden waardig vervult. Verder houdt Fred enorm van regelmaat. Zo heeft hij sinds de oprichting van De Spelmaeckers nog nooit afgeweken van de zaalschikking. Stoelen en tafels worden dan ook eigenhandig door Fred op dezelfde manier gepositioneerd. Diezelfde regelmaat speelde hem wat parten toen Simen erbij kwam, want sindsdien moest hij zijn ‘lelijke dozen’ in het midden plaatsen, tussen die van Simen en Davy. Zo weet je ook meteen hoe je Fred zijn spellen kan herkennen. Aan de donkere dozen met monsters en aliens. Deze fantasy- en sci-fispellen test hij vooral op donderdag uit met zijn tuesdaygamenightclub. Zodat hij ze vlekkeloos op zijn sloefkes kan uitleggen op één van onze spelavonden.",
    facebookLink: "https://www.facebook.com/frederiek.meersman",
    image: "http://www.fredece249.249.axc.nl/wp-content/uploads/2018/09/Frederiek.jpg"
  },
  {
    name: "Simen Vandenbussche",
    description: "Jongste binnen het spelmaeckersgezelschap. Omdat hij toch op bijna iedere spellenavond was en er protesten kwamen omdat hij alle tombolaprijzen kaapte, vult hij na een (min of meer) geslaagde stageperiode sinds 2014 het team spelmaeckers verder aan. Hij heeft zich onmiddellijk opgewerkt tot de bijzonder zware taak van sleutelverantwoordelijke. Favoriete spelen: worker placement. Andere interesses: basketbal, zijn lief (volgorde van belangrijkheid moet je aan hem vragen)",
    facebookLink: "https://www.facebook.com/vandenbussche.simen",
    image: "http://www.fredece249.249.axc.nl/wp-content/uploads/2014/07/Simen-1.jpg"
  }
];


const MembersSection: React.FC<Props> = () => {
  return (
    <SectionWrapper title="membersSection.title">
      <Row justify="center" gutter={64}>
        {members.map(member => <MemberBlock member={member}></MemberBlock>)}
      </Row>
    </SectionWrapper>
  );
};

export default MembersSection;