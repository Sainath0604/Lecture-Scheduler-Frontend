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
            <div className="p-5 flex flex-col gap-2 items-center">
              {courseInfo.map((course) => (
                <div
                  className="flex flex-col gap-2 border dark:border-black p-2 lg:w-1/2"
                  key={course._id}
                >
                  <div className="flex gap-4 p-2">
                    <div>
                      <img
                        className="w-44 h-44 object-cover rounded-md"
                        src={course.image.data}
                        alt={course.cName}
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-1/2">
                      <span>Course: {course.cName}</span>
                      <span>Level: {course.cLevel}</span>
                    </div>
                  </div>
                  <div>
                    <p>Description: {course.cDescription}</p>
                  </div>
                  <div>
                    <span>Lectures:</span>
                    <div className="flex flex-col gap-2 ml-2">
                      {course.lecture.map((lecture) => (
                        <div className="flex flex-col" key={lecture._id}>
                          <span>Professor: {lecture.lec_prof}</span>
                          <span>Time: {lecture.lec_Time}</span>
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
