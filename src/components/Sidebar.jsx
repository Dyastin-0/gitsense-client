import Button from "./ui/Button";

const Sidebar = () => {
  return (
    <div className="flex flex-col min-w-[220px] h-full bg-primary rounded-md gap-2 p-4">
      <Button text="Repositories" />
      <Button text="Webhooks" />
    </div>
  );
};

export default Sidebar;
