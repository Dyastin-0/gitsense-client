import TruncatedText from "./ui/TruncatedText"

const Repository = ({ repository }) => {
    return (
      <div className="grid grid-cols-1 h-[140px] bg-secondary rounded-md p-4 text-sm">
          <h1 className="text-md font-semibold">{repository.name}</h1>
          <p className="text-sm text-secondary-foreground">{repository.full_name}</p>
          <TruncatedText text={repository.description} />
      </div>
    )
  }
  
  export default Repository