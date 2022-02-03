import Container from "../common/container";
import EventItem from "./eventItem";

const Events = () => {
  return (
    <>
      <Container id="events" title="Up Coming Events">
        <div className="row g-5">
          <EventItem
            title="Event title"
            desc="Brief description"
            date="Event date"
          />
          <EventItem
            title="Event title"
            desc="Brief description"
            date="Event date"
          />
          <EventItem
            title="Event title"
            desc="Brief description"
            date="Event date"
          />
        </div>
      </Container>
    </>
  );
};

export default Events;
