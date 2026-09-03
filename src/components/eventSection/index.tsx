import { Col, Row } from 'antd';
import SectionWrapper from 'components/sectionWrapper';
import { Event, EventCollection } from 'graphql/schema';
import dayjs from 'lib/dayjs';
import ConditionalWrapper from 'utils/componentWrapper';
import './styles.scss';

interface Props {
  eventCollection?: EventCollection;
}

const removeTimeZonePart = (dateString: string) => {
  let finalDate = '';

  if (dateString.split('+').length > 1) {
    const b = dateString.split('+');

    finalDate = b[0];
  } else {
    const b = dateString.split('-');

    if (b.length > 1) {
      b.pop();
      finalDate = b.join('-');
    }
  }

  return finalDate;
};

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
              {dayjs(removeTimeZonePart(event.from)).format('D MMMM @ HH:mm')}{' '}
              {event.to && dayjs(removeTimeZonePart(event.to)).format('- HH:mm')}
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
