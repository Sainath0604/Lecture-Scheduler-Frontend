import { useEffect, useState } from "react";
import EditUser from "./EditUser";
import AdminNav from "./AdminNav";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { getServerUrl } from "../utility/getServerUrl";
import "../styles/Admin.css";
import { DeleteIcon, EditIcon } from "../Icons/Icons";

function ViewUser() {
  const [data, setData] = useState([]);

  const serverUrl = getServerUrl();
  const viewUserUrl = new URL("/getAllUser", serverUrl);
  const deleteUserUrl = new URL("/deleteUser", serverUrl);
  const editUserUrl = new URL("/editUser", serverUrl);

  const getAllUser = () => {
    fetch(viewUserUrl, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User data");
        setData(data.data);
      });
  };
  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = (e, id, name) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${name} info`)) {
      fetch(deleteUserUrl, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });

      console.log(name, id);
    } else {
      console.log("Oops ..!!, Something went wrong please try again later");
    }
  };

  const editUser = (id, newfName, newlName, newEmail) => {
    fetch(editUserUrl, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userid: id,
        newfName: newfName,
        newlName: newlName,
        newEmail: newEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.data);
        getAllUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" md:flex">
        <div className="AdminNav w-full bg-white">
          <AdminNav />
        </div>
        <div className="flex sm:w-full md:w-4/5 justify-center ViewProduct">
          <div>
            <table className="border">
              <caption className="caption-top py-2 lg:my-8 text-3xl font-semibold text-gray-800 bg-[#fff]">
                All Users Information
              </caption>
              <thead className=" text-white text-sm font-thin bg-sky-800">
                <tr>
                  <th className="border p-4">Name</th>
                  <th className="border p-4">Surname</th>
                  <th className="border p-4">Email</th>
                  <th className="border p-4">User type</th>
                  <th className="border p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-black text-sm font-thin">
                {/* mapping the fetched data */}
                {data.map((i, index) => {
                  return (
                    <tr
                      key={i._id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-gray-200`}
                    >
                      <td className="border border-gray-500 p-2 text-left">
                        {i.fName}
                      </td>
                      <td className="border border-gray-500 p-2 text-left">
                        {i.lName}
                      </td>
                      <td className="border border-gray-500 p-2 text-left">
                        {i.email}
                      </td>
                      <td className="border border-gray-500 p-2">
                        {i.userType}
                      </td>
                      <td className="border border-gray-500 p-2">
                        <div className="flex justify-center flex-row">
                          <div className="flex justify-center">
                            <span
                              className="cursor-pointer text-gray-800 mr-5 hover:text-gray-500 text-xl"
                              onClick={(e) => deleteUser(e, i._id, i.fName)}
                            >
                              <DeleteIcon />
                            </span>
                          </div>
                          <div className="flex justify-center ">
                            <Popup
                              trigger={
                                <button className="button">
                                  <span className="text-gray-800 hover:text-gray-500 text-xl">
                                    <EditIcon />
                                  </span>
                                </button>
                              }
                              modal
                              nested
                            >
                              {(close) => (
                                <div>
                                  <EditUser
                                    id={i._id}
                                    fName={i.fName}
                                    lName={i.lName}
                                    email={i.email}
                                    onEdit={(
                                      id,
                                      newfName,
                                      newlName,
                                      newEmail
                                    ) =>
                                      editUser(id, newfName, newlName, newEmail)
                                    }
                                    onCancel={close}
                                  />
                                </div>
                              )}
                            </Popup>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
