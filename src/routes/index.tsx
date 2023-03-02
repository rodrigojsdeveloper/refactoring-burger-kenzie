import { Routes, Route } from "react-router-dom";
import { ListProducts } from "../components/ListProducts";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<ListProducts />} />
    </Routes>
  );
};

export { AllRoutes };
