import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Courses from "./components/Courses";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import ForgotPassword from "./authentication/ForgotPassword";
import UserDetails from "./authentication/UserDetails";
import UserHome from "./authentication/UserHome";
import AdminSignUp from "./admin/AdminSignUp";
import AdminPanel from "./admin/AdminPanel";
import Instructors from "./admin/Instructors";
import ViewUser from "./admin/ViewUser";
import UploadCourse from "./admin/UploadCourse";
import Course from "./admin/Course";

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
          <Route path="/courses" element={<Courses />} />
          {/* <Route
            path="/courses"
            element={isLoggedIn == "true" ? <Courses /> : <SignIn />}
          /> */}
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
          <Route path="/viewUser" element={<ViewUser />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/uploadCourse" element={<UploadCourse />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
