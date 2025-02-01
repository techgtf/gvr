import { useContext } from "react";
import ReactDOM from "react-dom";
import { TeamContext } from "../../context/TeamContext";

const TeamModal = () => {
  const { allProfile, handleCloseModal } = useContext(TeamContext);
  const activeProfile = allProfile.find((profile) => profile.isModalOpen);

  if (!activeProfile) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[40%] relative">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={handleCloseModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-700">{activeProfile.bio}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TeamModal;
