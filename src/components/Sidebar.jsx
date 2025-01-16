import useContent from "./hooks/useContent";
import Button from "./ui/Button";

const Sidebar = () => {
  const { setContent } = useContent();

  return (
    <div className="flex flex-col min-w-[220px] h-full bg-primary rounded-md gap-2 p-3">
      <Button text="Repositories" onClick={() => setContent("repositories")} />
      <Button text="Webhooks" />
      <Button text="Events" onClick={() => setContent("events")} />
    </div>
  );
};

export default Sidebar;
