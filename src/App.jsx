import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import AdminSignUp from "./admin/AdminSignUp";
import ForgotPassword from "./authentication/ForgotPassword";

function App() {
  return (
    <Router>
      <main className="flex-grow text-white dark:text-black bg-customDark1-500 dark:bg-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/adminSignUp" element={<AdminSignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
