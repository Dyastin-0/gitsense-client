import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-w-[220px] h-full bg-primary rounded-md gap-2 p-3">
      <Button text="Repositories" onClick={() => navigate("/repositories")} />
      <Button text="Events" onClick={() => navigate("/events")} />
    </div>
  );
};

export default Sidebar;
