import { Routes, Route } from "react-router-dom";
import { Cart } from "../components/Cart";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Cart />} />
    </Routes>
  );
};

export { AllRoutes };
