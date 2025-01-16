import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useEvents from "../hooks/useEvents";
import Event from "./Event";
import Accordion from "./ui/Accordion";

dayjs.extend(relativeTime);

const Events = () => {
  const { events } = useEvents();

  return (
    <div className="flex flex-col w-full h-full bg-primary p-3 rounded-md">
      {events &&
        events.map((event, index) => (
          <Accordion
            key={index}
            title={`${event.webhook} - ${dayjs(
              event.timestamp * 1000
            ).fromNow()}`}
          >
            <Event event={event} />
          </Accordion>
        ))}
    </div>
  );
};

export default Events;
