import { Routes, Route } from "react-router-dom";
import { FormSignUp } from "../components/FormSignUp";
import { SignIn } from "../pages/SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SignIn />} />
      <Route path="/signup" element={<FormSignUp />} />
    </Routes>
  );
};

export { AllRoutes };
