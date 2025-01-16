import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import useAuth from "./hooks/useAuth";

const Signin = lazy(() => import("./pages/Signin"));
const Repositories = lazy(() => import("./pages/Repositories"));
const Events = lazy(() => import("./pages/Events"));

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;
axios.defaults.withCredentials = true;

const App = () => {
  const { token } = useAuth();

  return (
    <div className="app-container flex flex-col min-h-screen">
      <Navbar />
      <div className="main-content flex flex-1 gap-3 p-3">
        {token && <Sidebar />}
        <div className="page-content flex-1">
          <Suspense>
            <Routes>
              <Route path="/sign-in" element={<Signin />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/repositories" element={<Repositories />} />
                <Route path="/events" element={<Events />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
