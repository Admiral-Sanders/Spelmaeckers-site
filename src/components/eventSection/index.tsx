import { Col, Row } from "antd";
import Moment from 'react-moment';
import SectionWrapper from "components/sectionWrapper";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useGetEventsQuery } from "graphql/schema";
import Loading from "components/loading";

interface Props {
  currentDatetime: string;
}

const EventSection: React.FC<Props> = ({ currentDatetime }) => {
  const { data, error, loading } = useGetEventsQuery({
    variables: { now: currentDatetime }
  });

  if (loading) {
    return <Loading />;
  }

  const renderEvent = (event: any) => {
    return (
      <Col key={event.title} className="event">
        <Link to={{ pathname: event.link}} target="_blank">
        <img style={{ maxWidth: 200 }} src="https://despelmaeckers.be/images/event-logo.png"></img>
        <h1>{event.title}</h1>
        <h2><Moment format="D MMMM @ HH:mm">{event.from}</Moment> { event.to && <Moment format="- HH:mm">{event.to}</Moment>}</h2>
        </Link>
      </Col>
    )
  };

  return (
    <SectionWrapper title="eventSection.title">
      <Row justify="center" gutter={64}>
        { data?.eventCollection?.items?.map(event => renderEvent(event))}
      </Row>
    </SectionWrapper>
  );
};

export default EventSection;