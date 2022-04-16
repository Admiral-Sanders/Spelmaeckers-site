import SectionWrapper from "components/sectionWrapper";
import "./styles.scss";

interface Props {

}

const EventSection: React.FC<Props> = () => {
  return (
    <SectionWrapper title="eventSection.title">
      <div>Content</div>
    </SectionWrapper>
  );
};

export default EventSection;