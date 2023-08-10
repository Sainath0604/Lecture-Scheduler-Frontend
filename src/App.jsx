import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import ForgotPassword from "./authentication/ForgotPassword";
import UserDetails from "./authentication/UserDetails";
import UserHome from "./authentication/UserHome";
import AdminSignUp from "./admin/AdminSignUp";
import { useEffect, useState } from "react";
import AdminPanel from "./admin/AdminPanel";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const userType = window.localStorage.getItem("userType");
    setUserType(userType);
  }, []);
  return (
    <Router>
      <main className="flex-grow text-white dark:text-black bg-customDark1-500 dark:bg-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/signIn"
            element={isLoggedIn == "true" ? <UserDetails /> : <SignIn />}
          />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/adminSignUp" element={<AdminSignUp />} />
          {userType === "admin" ? (
            <Route path="/adminPanel" element={<AdminPanel />} />
          ) : (
            <Route path="/adminPanel" element={<ErrorPage />} />
          )}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
