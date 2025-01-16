import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "../ui/Button";
import useAuth from "../../hooks/useAuth";

const SigninForm = ({}) => {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    token && navigate("/repositories");
  }, [token]);

  return (
    <div className="flex flex-col w-[250px] max-w-full p-3 text-xs text-primary-foreground rounded-md border border-secondary-accent z-10">
      <h2 className="w-full text-center pb-4 text-lg font-bold">
        Sign in to Gitsense
      </h2>
      <Button
        text="Github"
        icon={faGithub}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `${
            import.meta.env.VITE_BASE_API_URL
          }/auth/github`;
        }}
      />
    </div>
  );
};

export default SigninForm;
