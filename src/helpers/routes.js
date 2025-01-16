import { faSourcetree } from "@fortawesome/free-brands-svg-icons";
import { faHome, faTerminal } from "@fortawesome/free-solid-svg-icons";

export const routes = [
  { path: "/home", name: "Home", icon: faHome },
  { path: "/events", name: "Events", icon: faTerminal },
  { path: "/repositories", name: "Repositories", icon: faSourcetree },
];
export const authRoutes = [{ path: "/sign-in", name: "Sign in" }];
