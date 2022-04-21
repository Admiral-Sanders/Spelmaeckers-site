import { Row } from "antd";
import SectionWrapper from "components/sectionWrapper";
import InfoBlock from "./components/infoBlock";
import "./styles.scss";
import { useGetPracticalItemsQuery } from "graphql/schema";

interface Props {

}

const sortItems = (items: any[]): any[] => {
  return [...items].sort((a, b) => (a?.order || 99) > (b?.order || 99) ? 1 : -1)
}

const PracticalSection: React.FC<Props> = () => {
  const { data, error, loading } = useGetPracticalItemsQuery();

  if (loading) {
    return <p>Loading</p>; //TODO FIX LOADING
  }

  return (
    <SectionWrapper title="practicalSection.title">
      <Row className="infoRow">
        { sortItems(data?.practicalItemCollection?.items || []).map(item => <InfoBlock key={item?.title} title={item?.title || ""} description={item?.description || ""} icon={item?.icon}></InfoBlock>)}
      </Row>
    </SectionWrapper>
  );
};

export default PracticalSection;