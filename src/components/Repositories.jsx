import useAuth from "../hooks/useAuth";
import useRepository from "../hooks/useRepository";
import Repository from "./Repository";

const Repositories = () => {
    const { repositories } = useRepository();
    const { user } = useAuth();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-primary p-4 gap-2">
    {repositories?.map((repository) => (repository.owner.login == user.Login &&
      <Repository key={repository.id} repository={repository} />
  ))}
  </div>
  )
}

export default Repositories