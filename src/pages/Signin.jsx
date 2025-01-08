import { useNavigate } from "react-router";
import SigninForm from "../components/forms/SigninForm";
import useAuth from "../hooks/useAuth";
import WebhookForm from "../components/forms/WebhookForm";

const Signin = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  if (token) {
    navigate("/home");
    return;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-primary text-xs p-4 rounded-md">
      <SigninForm />
      <WebhookForm />
    </div>
  );
};

export default Signin;
