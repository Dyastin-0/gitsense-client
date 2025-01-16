import useEvents from "../hooks/useEvents";
import Event from "./Event";

const Events = () => {
  const { events } = useEvents();

  return (
    <div className="flex flex-col w-full h-full bg-primary rounded-md p-3 gap-3">
      {events &&
        events.map((event, index) => <Event key={index} event={event} />)}
    </div>
  );
};

export default Events;
