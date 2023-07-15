import React from "react";

const CodeSnippet = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg text-white mb-10">
      <pre className="prose">
        <code className="language-jsx">
          {`// Set up the DALL-E endpoint
app.post("/image", async (req, res) => {
// Get the prompt from the request
const { prompt } = req.body;

// Generate image from prompt
const response = await openai.createImage({
prompt: prompt,
n: 1,
size: "1024x1024",
});
// Send back image url
res.send(response.data.data[0].url);
});`}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
