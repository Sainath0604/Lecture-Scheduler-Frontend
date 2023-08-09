import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
import "../CSS/Admin.css";

function AdminPanel({ userData }) {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    if (isLoggedIn) {
      navigate("/userDetails");
    }
  }, [navigate]);

  return (
    <>
      <div className="AdminBg bg-[#a385db]">
        <div className="md:flex">
          <AdminNav />
          <div className="lg:h-screen md:w-4/5  text-black p-5 ">
            <h1 className="font-bold text-2xl mb-5 lg:mb-10">
              Hey, Welcome Admin
            </h1>
            <div>
              <h1 className="font-semibold text-xl mb-2 lg:mb-5 ml-5 lg:ml-10">
                Admin details
              </h1>
              <div className="border bg-indigo-50  border-gray-700 rounded-xl space-y-4 lg:space-y-8 mt-8 mx-5 lg:mt-10 lg:ml-10  lg:mr-24 p-4 lg:p-10 text-base">
                <div className="border border-gray-900 rounded-lg">
                  <div className="flex">
                    <div className="border-r  border-gray-900 rounded-l py-2  bg-[#241B35] dark:hover:bg-[#523588] hover:bg-[#594383] text-[#fff] pl-5 pr-5">
                      <span className="font-bold ">Name</span>
                    </div>
                    <div className="pl-5 py-2">
                      <span>{userData.fName}</span>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-900 rounded-lg">
                  <div className="flex">
                    <div className="border-r border-gray-900 rounded-l py-2  bg-[#241B35] dark:hover:bg-[#523588] hover:bg-[#594383] text-[#fff] pl-5 pr-5">
                      <span className="font-bold">Surname</span>
                    </div>
                    <div className="pl-5 py-2">
                      <span>{userData.lName}</span>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-900 rounded-lg">
                  <div className="flex">
                    <div className="border-r border-gray-900 rounded-l py-2  bg-[#241B35] dark:hover:bg-[#523588] hover:bg-[#594383] text-[#fff] pl-5 pr-5 py-2">
                      <span className="font-bold">Email</span>
                    </div>
                    <div className="pl-5 py-2">
                      <span>{userData.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

AdminPanel.propTypes = {
  userData: PropTypes.shape({
    fName: PropTypes.string.isRequired,
    lName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

AdminPanel.defaultProps = {
  userData: {
    fName: "Default Name",
    lName: "Default Surname",
    email: "Default Email",
  },
};

export default AdminPanel;
