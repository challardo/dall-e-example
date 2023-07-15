"use client";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import Chance from "chance";
import ActionButtons from "./components/ActionButtons";
import ImageGeneratorForm from "./components/ImageGeneratorForm";
import Title from "./components/Title";
import AditionalInfo from "./components/AditionalInfo";
import ImageGenerated from "./components/ImageGenerated";

const chance = new Chance();

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (input: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      input.preventDefault();

      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setImage(data.url);
    } catch (error) {
      console.log(error);
      toast.error("Request failed.");
    } finally {
      setPrompt("");
      setLoading(false);
    }
  };

  const handleSave = () => {
    if (image) {
      fetch(image)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = chance.animal();
          link.click();
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  };

  const handleReset = () => {
    setImage("");
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="p-4">
        <Title />
        <ImageGeneratorForm
          onSubmit={handleSubmit}
          prompt={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          loading={loading}
        />
        <ImageGenerated image={image} prompt={prompt} />
        <ActionButtons
          loading={loading}
          image={image}
          onSave={handleSave}
          onReset={handleReset}
        />

        <AditionalInfo />
      </div>
    </div>
  );
}
