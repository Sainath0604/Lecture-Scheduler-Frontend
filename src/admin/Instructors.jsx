import AdminNav from "./AdminNav";
import { Teachers } from "../utility/getInstructors";

function Instructors() {
  return (
    <div className="min-h-screen bg-white">
      <div className="md:flex">
        <AdminNav />
        <div className="lg:h-screen md:w-4/5 text-black p-5">
          <div>
            <h1 className="flex justify-center text-2xl font-semibold mb-4">
              Instructors
            </h1>
            <div className="flex lg:mt-5 border p-5">
              <ul className="list-decimal ml-5">
                {Teachers.map((teacher, index) => (
                  <li key={index} className="mb-2 ml-4">
                    {teacher}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructors;
