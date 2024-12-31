import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import useAxios from "../hooks/useAxios";
import Button from "./ui/Button"
import TruncatedText from "./ui/TruncatedText"

const Repository = ({ repository }) => {
  const { api } = useAxios();

  // const handleCreateWebHook = () => {
  //   api.post(`/webhook`, {
  //     repository: repository.name,
  //     secret: "", 
  //     name: "",
  //   })
  // }

  return (
    <div className="relative flex flex-col h-[140px] bg-secondary rounded-md p-4 text-sm">
        <TruncatedText text={repository.name} className="font-semibold" />
        <TruncatedText text={repository.full_name} className="text-secondary-foreground" />
        <p className="mt-auto">{repository.description}</p>
        <Button variant="default_rounded" icon={faEllipsisH} className="absolute w-fit right-4 top-4" />
    </div>
  )
}
  
  export default Repository