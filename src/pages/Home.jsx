import useContent from "../components/hooks/useContent";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { Content } = useContent();

  return (
    <div className="flex w-full h-full gap-4 p-4">
      <Sidebar />
      {Content}
    </div>
  );
};

export default Home;
