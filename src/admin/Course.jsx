// import PropTypes from "prop-types";
import { getServerUrl } from "../utility/getServerUrl";

import AdminNav from "./AdminNav";
import { useEffect, useState } from "react";
function Course() {
  const [courseInfo, setCourseInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const serverUrl = getServerUrl();
  const viewCourseUrl = new URL("/getCourseInfo", serverUrl);

  useEffect(() => {
    fetchCourseInfo();
  }, []);

  const fetchCourseInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(viewCourseUrl);
      const data = await response.json();
      setCourseInfo(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
              <div className="flex sm:w-full  justify-center">
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
                      </tr>
                    </thead>
                    <tbody>
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
                            <td className="border p-2 ">
                              {course.cDescription}
                            </td>
                            <td className="border p-2 ">
                              <div className="flex justify-center">
                                {course.cLevel}
                              </div>
                            </td>
                            <td className="border p-2 ">
                              {course.lecture.map((lecture) => (
                                <div key={lecture._id}>
                                  <div>Professor: {lecture.lec_prof}</div>
                                </div>
                              ))}
                            </td>
                            <td className="border p-2 ">
                              {course.lecture.map((lecture) => (
                                <div key={lecture._id}>
                                  <div>Time: {lecture.lec_Time}</div>
                                </div>
                              ))}
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
