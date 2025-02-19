import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Separator from "./ui/Separator";
import Tooltip from "./ui/Tooltip";

dayjs.extend(relativeTime);

const Event = ({ event }) => {
  return (
    <div className="flex flex-col p-2 gap-2 rounded-md text-xs text-primary-foreground">
      <span className="text-secondary-foreground">{`${event._id}`}</span>
      <Tooltip
        text={dayjs(event.timestamp * 1000).format("MMMM D, YYYY HH:mm")}
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
        </>
      )}
    </div>
  );
};

export default Event;
