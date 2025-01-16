import useContent from "../components/hooks/useContent";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { Content } = useContent();

  return (
    <div className="flex w-full h-full gap-3 p-3">
      <Sidebar />
      {Content}
    </div>
  );
};

export default Home;
