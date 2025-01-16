import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Separator from "./ui/Separator";
import Tooltip from "./ui/Tooltip";

dayjs.extend(relativeTime);

const Event = ({ event }) => {
  return (
    <div className="flex flex-col p-2 gap-2 rounded-md text-xs text-primary-foreground">
      <div className="flex gap-1">
        <h1 className="text-xs font-semibold">{event.webhook}</h1>
        <span className="text-secondary-foreground">{`${event._id}`}</span>
      </div>
      <Tooltip
        text={dayjs(event.timestamp * 1000).format("MMMM D, YYYY h:mm A")}
      >
        <span className="w-fit">{dayjs(event.timestamp * 1000).fromNow()}</span>
      </Tooltip>
      <Separator />
      <h2 className="text-secondary-foreground">stdout</h2>
      <code className="bg-secondary whitespace-pre-wrap p-2 rounded-md">{`${event.stdout}`}</code>
      <Separator />
      {event.stderr && (
        <>
          <h2 className="text-secondary-foreground">stderr</h2>
          <code className="bg-secondary whitespace-pre-wrap p-2 rounded-md">{`${event.stderr}`}</code>
          <Separator />
        </>
      )}
    </div>
  );
};

export default Event;
