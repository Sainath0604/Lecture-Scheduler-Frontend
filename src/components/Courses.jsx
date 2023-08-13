import { useEffect, useState } from "react";
import { getServerUrl } from "../utility/getServerUrl";
import Navbar from "./Navbar";

function Courses() {
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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow text-white dark:text-black bg-customDark1-500 dark:bg-gray-200">
        <div>
          {loading ? (
            <div className="lg:mt-60">
              <h1>Loading data .......</h1>
            </div>
          ) : (
            <div className="p-5 grid justify-items-center grid-cols-1 gap-y-5 mb-4 md:grid-cols-2 md:gap-y-8">
              {courseInfo.map((course) => (
                <div
                  className="flex flex-col gap-2 border dark:border-black bg-gray-200 dark:bg-gray-600 rounded-md text-black dark:text-white py-4 px-2 w-11/12"
                  key={course._id}
                >
                  <div className="flex flex-col lg:flex-row gap-4 p-2 lg:items-center">
                    <div className="flex justify-center">
                      <img
                        className="w-44 h-44 object-cover border rounded-md shadow-2xl"
                        src={course.image.data}
                        alt={course.cName}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center text-lg">
                        <span className="text-red-900">Course:</span>
                        <span className="font-semibold">{course.cName}</span>
                      </div>
                      <div className="flex gap-2 items-center text-lg">
                        <span className="text-red-900">Level:</span>
                        <span className="font-semibold">{course.cLevel}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="flex flex-col">
                      <span className="text-red-900">Description:</span>
                      <p className="pl-2 text-sm font-semibold">
                        {course.cDescription}
                      </p>
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="text-red-900">Lectures:</span>
                    <div className="flex flex-col gap-2 ml-2">
                      {course.lecture.map((lecture) => (
                        <div className="flex flex-col" key={lecture._id}>
                          <div className="flex gap-2">
                            <span className="text-blue-900">Professor:</span>
                            <span className="font-semibold">
                              {lecture.lec_prof}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-blue-900">Time:</span>
                            <span className="font-semibold">
                              {lecture.lec_Time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Courses;
