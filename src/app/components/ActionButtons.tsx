import { FC } from "react";

type ActionButtons = {
  loading: boolean;
  image: string;
  onSave: () => void;
  onReset: () => void;
};

const ActionButtons: FC<ActionButtons> = ({
  loading,
  image,
  onSave,
  onReset,
}) => {
  return (
    <div className="flex justify-center mt-2">
      <button
        disabled={loading || !image}
        onClick={onSave}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500 text-white font-bold py-2 px-8 rounded transition-colors duration-300"
      >
        Save
      </button>
      <button
        disabled={loading || !image}
        onClick={onReset}
        className="bg-fuchsia-700 hover:bg-fuchsia-800 disabled:bg-gray-500 text-white font-bold py-2 px-8 rounded ml-2 transition-colors duration-300"
      >
        Reset
      </button>
    </div>
  );
};

export default ActionButtons;
