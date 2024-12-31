import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const Signin = lazy(() => import("./pages/Signin"));
const Home = lazy(() => import("./pages/Home"));

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;
axios.defaults.withCredentials = true;

console.log(import.meta.env.VITE_BASE_API_URL);

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
