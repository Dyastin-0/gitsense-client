import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Button from "./ui/Button";

const Sidebar = () => {
  const { api, isAxiosReady } = useAxios();

  useEffect(() => {
    if (isAxiosReady) {
      api.get("/output").then((response) => {
        console.log(response.data);
      });
    }
  }, [api, isAxiosReady]);

  return (
    <div className="flex flex-col min-w-[220px] h-full bg-primary rounded-md gap-2 p-4">
      <Button text="Repositories" />
      <Button text="Webhooks" />
    </div>
  );
};

export default Sidebar;
