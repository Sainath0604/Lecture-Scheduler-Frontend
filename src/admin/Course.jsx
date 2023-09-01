import { DeleteIcon, EditIcon } from "../Icons/Icons";
import { getServerUrl } from "../utility/getServerUrl";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AdminNav from "./AdminNav";
import { useEffect, useState } from "react";
import EditCourse from "./EditCourse";

function Course() {
  const [courseInfo, setCourseInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const serverUrl = getServerUrl();
  const viewCourseUrl = new URL("/getCourseInfo", serverUrl);
  const deleteCourseUrl = new URL("/deleteCourseInfo", serverUrl);
  const editCourseUrl = new URL("/editCourseInfo", serverUrl);

  useEffect(() => {
    fetchCourseInfo();
  }, []);

  const fetchCourseInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(viewCourseUrl);
      const data = await response.json();
      setCourseInfo(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteCourseInfo = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name} info`)) {
      fetch(deleteCourseUrl, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          courseId: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          fetchCourseInfo();
        });
    } else {
      alert("Failed to delete course information");
    }
  };

  const editCourseInfo = (formData) => {
    fetch(editCourseUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.data);
        fetchCourseInfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="md:flex">
          <AdminNav />
          <div className="lg:h-screen md:w-4/5  text-black p-5">
            {loading ? (
              <div className="flex sm:w-full md:w-4/5 justify-center lg:mt-60">
                <h1>Loading data .......</h1>
              </div>
            ) : (
              <div className="flex sm:w-full justify-center">
                <div className="mb-10">
                  <table className="border">
                    <caption className="caption-top my-12 text-3xl font-bold text-gray-900">
                      All Product information
                    </caption>
                    <thead className="h-14 bg-emerald-400">
                      <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Thumbnail</th>
                        <th className="border p-2">description</th>
                        <th className="border p-2">Level</th>
                        <th className="border p-2 w-[15vw]">
                          Assigned instructor
                        </th>
                        <th className="border p-2 w-[15vw]">Time</th>
                        <th className="border p-2 w-[8vw]">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-base">
                      {/* mapping the fetched data */}
                      {courseInfo.map((course, index) => {
                        return (
                          <tr
                            key={course._id}
                            className={`${
                              index % 2 === 0 ? "bg-gray-100" : "bg-white"
                            } h-56`}
                          >
                            <td className="border p-2 ">
                              <div className="flex justify-center">
                                {course.cName}
                              </div>
                            </td>
                            <td className="border p-2">
                              <div className="flex justify-center items-center">
                                <img
                                  className="w-44 h-44 object-contain rounded-md"
                                  src={course.image.data}
                                  alt={course.cName}
                                />
                              </div>
                            </td>
                            <td className="border p-2 text-xs text-left hyphens-auto">
                              {course.cDescription}
                            </td>
                            <td className="border p-2 text-red-900">
                              <div className="flex justify-center">
                                {course.cLevel}
                              </div>
                            </td>
                            <td className="border p-2">
                              {course.lecture.map((lecture) => (
                                <div key={lecture._id}>
                                  <div className="flex gap-1 items-center justify-center">
                                    <span className="text-sm">Professor:</span>
                                    <span>{lecture.lec_prof}</span>
                                  </div>
                                </div>
                              ))}
                            </td>
                            <td className="border p-2 ">
                              {course.lecture.map((lecture) => (
                                <div key={lecture._id}>
                                  <div className="flex gap-1 items-center justify-center">
                                    <span className="text-sm">Time:</span>
                                    <span>{lecture.lec_Time}</span>
                                  </div>
                                </div>
                              ))}
                            </td>
                            <td className="border p-2">
                              <div className="flex gap-4 justify-center">
                                <button
                                  className="text-red-700"
                                  onClick={() =>
                                    deleteCourseInfo(course._id, course.cName)
                                  }
                                >
                                  <DeleteIcon />
                                </button>
                                <div>
                                  <Popup
                                    trigger={
                                      <button className="text-blue-700">
                                        <EditIcon />
                                      </button>
                                    }
                                    modal
                                    nested
                                  >
                                    {(close) => (
                                      <div>
                                        <EditCourse
                                          id={course._id}
                                          cName={course.cName}
                                          cDescription={course.cDescription}
                                          image={course.image.data}
                                          cLevel={course.cLevel}
                                          lec_Time={course.lecture[0].lec_Time}
                                          lec_prof={course.lecture[0].lec_prof}
                                          onEdit={(formData) =>
                                            editCourseInfo(formData)
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
