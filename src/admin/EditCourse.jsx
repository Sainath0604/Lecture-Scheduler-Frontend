import { useState } from "react";
import PropTypes from "prop-types";

const EditCourse = ({
  id,
  cName,
  cDescription,
  cLevel,
  lectures,
  onEdit,
  onCancel,
}) => {
  const [newCname, setNewCname] = useState(cName);
  const [newDescription, setNewDescription] = useState(cDescription);
  const [newLevel, setNewLevel] = useState(cLevel);
  const [selectedFile, setSelectedFile] = useState(null);

  const [lectureInputs, setLectureInputs] = useState(
    lectures.map((lecture) => ({
      lecTime: lecture.lec_Time,
      lecProf: lecture.lec_prof,
    }))
  );

  const handleEdit = () => {
    const formData = new FormData();
    formData.append("courseId", id);
    formData.append("cName", newCname);
    formData.append("cDescription", newDescription);
    formData.append("cLevel", newLevel);

    lectureInputs.forEach((input, index) => {
      formData.append(`lec_Time_${index}`, input.lecTime);
      // console.log(input.lecTime);
      formData.append(`lec_prof_${index}`, input.lecProf);
      // console.log(input.lecProf);
    });

    if (selectedFile) {
      formData.append("course", selectedFile);
    }

    // console.log(formData);
    onEdit(formData);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleLectureInputChange = (index, type, value) => {
    setLectureInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = {
        ...newInputs[index],
        [type]: value,
      };
      return newInputs;
    });
  };

  return (
    <div className="bg-white border-2 border-sky-500 rounded-3xl p-4 ">
      <h1 className="flex items-center justify-center border border-gray-300 bg-emerald-500 rounded-xl h-10 p-2 font-bold text-stone-800 text-xl">
        Edit Course
      </h1>

      <div>
        <div className="md:mt-10 md:ml-10 md:mb-10 flex flex-col">
          <div>
            <label className="font-bold">
              Replace Course thumbnail:
              <input
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </label>
          </div>
          <div>
            <label className="font-bold">
              New course name:
              <input
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="text"
                placeholder="Product Name"
                value={newCname}
                onChange={(e) => setNewCname(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-row">
            <div>
              <label className="font-bold">New course description:</label>
            </div>
            <div>
              <textarea
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="text"
                rows={4}
                cols={40}
                placeholder="Product Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="font-bold">
              New course level:
              <select
                className="border rounded-lg p-1 text-black"
                name="status"
                id="status"
                value={newLevel}
                onChange={(e) => {
                  setNewLevel(e.target.value);
                }}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </label>
          </div>
          {lectures.map((lecture, index) => (
            <div key={index}>
              <h1>
                <span className="mr-2">Lecture</span>
                <span>{index + 1}</span>
              </h1>
              <div>
                <label className="font-bold">
                  New course lecturer:
                  <input
                    className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                    type="text"
                    placeholder="Lecturer"
                    value={lectureInputs[index].lecProf}
                    onChange={(e) =>
                      handleLectureInputChange(index, "lecProf", e.target.value)
                    }
                  />
                </label>
              </div>
              <div>
                <label className="font-bold">
                  New lecture time:
                  <input
                    className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                    type="text"
                    placeholder="Lecture Time"
                    value={lectureInputs[index].lecTime}
                    onChange={(e) =>
                      handleLectureInputChange(index, "lecTime", e.target.value)
                    }
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="border border-blue-700 bg-blue-500 rounded-lg px-2 py-1 mr-14 font-bold text-lg text-white "
            onClick={handleEdit}
          >
            Save
          </button>
          <button
            className="border border-red-700 bg-red-500 rounded-lg px-2 py-1 font-bold text-lg text-white "
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

EditCourse.propTypes = {
  id: PropTypes.string,
  cName: PropTypes.string,
  cDescription: PropTypes.string,
  cLevel: PropTypes.string,
  _id: PropTypes.number,
  lectures: PropTypes.array,
  lecture: PropTypes.shape({
    _id: PropTypes.number,
    lec_Time: PropTypes.string,
    lec_prof: PropTypes.string,
  }),
  onEdit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditCourse;
