import { FC, FormEvent, SetStateAction } from "react";

type ImageGeneratorForm = {
  onSubmit: (input: FormEvent<HTMLFormElement>) => void;
  onChange: (e: { target: { value: SetStateAction<string> } }) => void;
  prompt: string;
  loading: boolean;
};

const ImageGeneratorForm: FC<ImageGeneratorForm> = ({
  onSubmit,
  prompt,
  onChange,
  loading,
}) => {
  return (
    <form onSubmit={(input) => onSubmit(input)} className="flex mb-4">
      <input
        name="prompt"
        value={prompt}
        className="text-purple-700 font-bold flex-grow gap-x-2 rounded-lg p-2"
        type="text"
        placeholder="Write your prompt"
        onChange={onChange}
      />
      <button
        disabled={loading || !prompt}
        className="ml-2 font-bold bg-sky-400 p-2 rounded disabled:bg-gray-500 transition-colors duration-500 animate-fade-down animate-once animate-duration-500 animate-delay-200"
      >
        {loading ? "Loading" : "Generate Image"}
      </button>
    </form>
  );
};

export default ImageGeneratorForm;
