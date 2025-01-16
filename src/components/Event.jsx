import Separator from "./ui/Separator";

const Event = ({ event }) => {
  return (
    <div className="flex flex-col p-2 gap-2 rounded-md text-xs text-primary-foreground">
      <div className="flex gap-1">
        <h1 className="text-xs font-semibold">{event.webhook}</h1>
        <span className="text-secondary-foreground">{`${event._id}`}</span>
      </div>
      <Separator />
      <h2 className="text-secondary-foreground">Output</h2>
      <code className="whitespace-pre-wrap">{`${event.stdout}`}</code>
      <Separator />
      {event.stderr && (
        <>
          <h2 className="text-secondary-foreground">Error</h2>
          <code className="whitespace-pre-wrap">{`${event.stderr}`}</code>
          <Separator />
        </>
      )}
    </div>
  );
};

export default Event;
