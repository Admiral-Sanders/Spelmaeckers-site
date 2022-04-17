import { Col, Row } from "antd";
import Moment from 'react-moment';
import SectionWrapper from "components/sectionWrapper";
import "./styles.scss";
import { Link } from "react-router-dom";

interface Props {

}

const upComingEvents = [
  { title: "Spellenavond april", from: new Date("2022-04-22T19:00"), to: new Date("2022-04-22T23:30"), url: "https://www.facebook.com/events/961873244655901/961873267989232?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"},
  { title: "Spellenavond mei", from: new Date("2022-05-20T19:00"), to: new Date("2022-05-20T23:30"), url: "https://www.facebook.com/events/961873244655901/961873261322566/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22unknown%22%2C%22surface%22%3A%22page%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D]%2C%22ref_notif_type%22%3Anull%7D"},
]

const EventSection: React.FC<Props> = () => {
  const renderEvent = (event: any) => {
    return (
      <Col className="event">
        <Link to={{ pathname: event.url}} target="_blank">
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
        { upComingEvents.map(event => renderEvent(event))}
      </Row>
    </SectionWrapper>
  );
};

export default EventSection;