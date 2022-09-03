import { Col, Row } from 'antd';
import Loading from 'components/loading';
import SectionWrapper from 'components/sectionWrapper';
import { Event, EventCollection, useGetEventsQuery } from 'graphql/schema';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import ConditionalWrapper from 'utils/componentWrapper';
import './styles.scss';

interface Props {
  eventCollection?: EventCollection;
}

const EventSection: React.FC<Props> = ({ eventCollection }) => {
  const renderEvent = (event: Event) => {
    return (
      <Col key={event.title} className="event">
        <ConditionalWrapper
          condition={!!event.link}
          wrapper={(children) => (
            <a href={event.link || ''} target="_blank">
              {children}
            </a>
          )}
        >
          <>
            <img style={{ maxWidth: 200 }} src="https://despelmaeckers.be/images/event-logo.png"></img>
            <h1>{event.title}</h1>
            <h2>
              <Moment format="D MMMM @ HH:mm">{event.from}</Moment>{' '}
              {event.to && <Moment format="- HH:mm">{event.to}</Moment>}
            </h2>
          </>
        </ConditionalWrapper>
        <a href={event.link || ''} target="_blank"></a>
      </Col>
    );
  };

  return (
    <SectionWrapper title="eventSection.title">
      <Row justify="center" gutter={64}>
        {eventCollection?.items?.map((event) => renderEvent(event as Event))}
      </Row>
    </SectionWrapper>
  );
};

export default EventSection;
