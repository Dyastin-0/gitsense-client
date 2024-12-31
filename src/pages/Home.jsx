import Repositories from "../components/Repositories"
import Sidebar from "../components/Sidebar"

const Home = () => {


  return (
    <div className="flex w-full h-full gap-4 p-4">
      <Sidebar />
      <Repositories />
    </div>
  )
}

export default Home