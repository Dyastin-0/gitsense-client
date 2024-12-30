import { Link } from "react-router-dom";

const Filespace = () => {
  return (
    <Link
      className="outline-none rounded-md
		transition-all durantion-300 focus:shadow-[var(--accent-secondary)_0_0_0_2px]"
      to="/"
    >
      <div className="flex justify-center items-center h-full font-semibold">
        <h1 className="text-md text-primary-highlight">Git</h1>
        <h1 className="text-md text-primary-foreground">sense</h1>
      </div>
    </Link>
  );
};

export default Filespace;
