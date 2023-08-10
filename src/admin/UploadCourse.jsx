import { useState } from "react";
import AdminNav from "./AdminNav";
import { getServerUrl } from "../utility/getServerUrl";
import { UploadCloudIcon } from "../Icons/Icons";

function UploadCourse() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [cLevel, setLevel] = useState("Beginner");
  const [lecture, setLecture] = useState([
    {
      id: Date.now(),
      lec_prof: "",
      lec_Time: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedLectures = [...lecture];
    updatedLectures[index] = {
      ...updatedLectures[index],
      [field]: value,
    };
    setLecture(updatedLectures);
  };

  const addNewLecture = () => {
    setLecture([
      ...lecture,
      {
        id: Date.now(),
        lec_prof: "",
        lec_Time: "",
      },
    ]);
  };

  const removeLecture = (index) => {
    const updatedLectures = lecture.filter((_, i) => i !== index);
    setLecture(updatedLectures);
  };

  const serverUrl = getServerUrl();
  const uploadCourseUrl = new URL("/uploadCourse", serverUrl);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleName = (event) => {
    setCourseName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleLevel = (e) => {
    setLevel(e.target.value);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("course", selectedFile);
      formData.append("cName", courseName);
      formData.append("cDescription", description);
      formData.append("cLevel", cLevel);
      formData.append("lecture", JSON.stringify(lecture));

      const response = await fetch(uploadCourseUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Product uploaded successfully.");
        setSelectedFile(null);
        setDescription("");
        setCourseName("");
        setLevel("");
        setLecture([
          {
            id: Date.now(),
            lec_prof: "",
            lec_Time: "",
          },
        ]);
      } else {
        alert("Failed to upload product.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to upload product.");
    }
  };

  const Teachers = [
    "John Smith",
    "Alice Johnson",
    "Michael Williams",
    "Emily Brown",
    "Daniel Jones",
    "Olivia Davis",
    "David Wilson",
    "Sophia Taylor",
    "Matthew Martinez",
    "Ava Anderson",
  ];

  const Timings = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
  ];

  function handleTest() {
    console.log("Course Name:", courseName);
    console.log("Description:", description);
    console.log("Level:", cLevel);
    console.log("Selected File:", selectedFile);
    console.log("Lectures:", lecture);
  }

  return (
    <div className="md:flex bg-white">
      <AdminNav />
      <div className="flex sm:w-full md:w-4/5 justify-center">
        <div className="flex flex-col items-center w-4/5">
          <h1 className="flex items-center justify-center bg-gray-400 rounded-xl font-bold text-gray-800 text-base lg:text-xl lg:w-96 p-4 my-5 shadow-lg hover:shadow-2xl">
            <span>Add new courses</span>
            <span className="text-2xl font-bold ml-2 lg:ml-5">
              <UploadCloudIcon />
            </span>
          </h1>
          <div className="w-11/12 flex flex-col">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div>
                  <label className="font-semibold text-black">
                    Course Name:
                  </label>
                </div>
                <div>
                  <input
                    className="border rounded-lg p-1 w-80 text-black"
                    type="text"
                    placeholder="Product Name"
                    value={courseName}
                    onChange={handleName}
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <label className="font-semibold text-black">
                    Course Description:
                  </label>
                </div>
                <div>
                  <textarea
                    rows={4}
                    cols={40}
                    name="postContent"
                    className="border rounded-lg p-2 text-black"
                    type="text"
                    placeholder="Product Description"
                    value={description}
                    onChange={handleDescription}
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <label className="font-semibold text-black">
                    Course Level:
                  </label>
                </div>
                <div>
                  <select
                    className="border rounded-lg p-1 text-black"
                    name="status"
                    id="status"
                    value={cLevel}
                    onChange={handleLevel}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="mb-2">
                  <label className="font-semibold text-black">
                    Add course thumbnail
                  </label>
                </div>
                <div className="mb-5">
                  <input
                    className="border bg-[#fff] rounded-lg p-1 w-80 text-black"
                    type="file"
                    name="course"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mb-2">
                  <label className="font-semibold text-black">
                    Set lectures:
                  </label>
                </div>
                <div>
                  {lecture.map((lecture, index) => (
                    <div key={lecture.id} className="mb-4">
                      <select
                        value={lecture.lec_prof}
                        onChange={(e) =>
                          handleInputChange(index, "lec_prof", e.target.value)
                        }
                        className="mr-2 p-2 border text-black"
                      >
                        <option value="">Select Professor</option>
                        {Teachers.map((teacher) => (
                          <option key={teacher} value={teacher}>
                            {teacher}
                          </option>
                        ))}
                      </select>
                      <select
                        value={lecture.lec_Time}
                        onChange={(e) =>
                          handleInputChange(index, "lec_Time", e.target.value)
                        }
                        className="mr-2 p-2 border text-black"
                      >
                        <option value="">Select Timing</option>
                        {Timings.map((timing) => (
                          <option key={timing} value={timing}>
                            {timing}
                          </option>
                        ))}
                      </select>
                      {index > 0 && (
                        <button
                          onClick={() => removeLecture(index)}
                          className="p-2 bg-red-500 text-white rounded"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addNewLecture}
                    className="p-2 bg-green-500 text-white rounded"
                  >
                    Add Lecture
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <button
              className="border bg-gray-400 rounded-xl font-bold text-gray-800 px-4 py-2 text-md lg:text-md  "
              onClick={handleUpload}
            >
              Upload
            </button>
            <button
              className="border bg-gray-400 rounded-xl font-bold text-gray-800 px-4 py-2 text-md lg:text-md  "
              onClick={handleTest}
            >
              test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadCourse;
