import CodeSnippet from "./CodeSnippet";
import DalleExample from "./DalleExample";

const AditionalInfo = () => {
  return (
    <>
      <h2 className="text-4xl font-extrabold text-center mt-4">
        An example of a generated Image
      </h2>
      <p className="text-lg font-normal text-gray-500 text-center mb-4">
        Using the DALL-E API provided by OpenAI
      </p>

      <CodeSnippet />

      <DalleExample />
    </>
  );
};

export default AditionalInfo;
