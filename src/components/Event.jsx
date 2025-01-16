import Separator from "./ui/Separator";

const Event = ({ event }) => {
  return (
    <div className="flex flex-col p-2 gap-2 rounded-md text-sm text-primary-foreground">
      <h1 className="text-sm font-semibold">{event.webhook}</h1>
      <span className="text-secondary-foreground">{`Event ID: ${event.id}`}</span>
      <Separator />
      <h2 className="text-secondary-foreground">Output</h2>
      <span className="whitespace-pre-wrap">{event.stdout}</span>
      <Separator />
      <h2 className="text-secondary-foreground">Error</h2>
      <span className="whitespace-pre-wrap">{event.stderr}</span>
    </div>
  );
};

export default Event;
