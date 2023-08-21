import PropTypes from "prop-types";
import { useState } from "react";

const EditUser = ({ id, fName, lName, email, onEdit, onCancel }) => {
  const [newfName, setNewfName] = useState(fName);
  const [newlName, setNewlName] = useState(lName);
  const [newEmail, setNewEmail] = useState(email);

  const handleEdit = () => {
    onEdit(id, newfName, newlName, newEmail);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="border border-sky-500 rounded-2xl p-2 lg:p-6 flex flex-col gap-4">
      <span className="flex items-center justify-center border border-gray-300 shadow-lg bg-emerald-500 rounded-xl p-2 font-bold text-stone-800 text-xl">
        Edit User
      </span>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-2">
            <label className="font-bold">First name:</label>
            <input
              className="border border-sky-400 rounded-lg p-1 font-normal"
              type="text"
              placeholder="First name"
              value={newfName}
              onChange={(e) => setNewfName(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-2">
            <label className="font-bold">Surname:</label>
            <input
              className="border border-sky-400 rounded-lg p-1 font-normal"
              type="text"
              placeholder="Surname"
              value={newlName}
              onChange={(e) => setNewlName(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-2">
            <label className="font-bold">Email:</label>
            <input
              className="border border-sky-400 rounded-lg p-1 font-normal"
              type="text"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-2 lg:gap-4">
          <button
            className="border border-blue-700 bg-blue-500 rounded-lg px-4 py-1.5 font-bold text-lg text-white "
            onClick={handleEdit}
          >
            Save
          </button>
          <button
            className="border border-red-700 bg-red-500 rounded-lg px-4 py-1.5 font-bold text-lg text-white "
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

EditUser.propTypes = {
  id: PropTypes.string,
  fName: PropTypes.string,
  lName: PropTypes.string,
  email: PropTypes.string,
  onEdit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditUser;
