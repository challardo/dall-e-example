import Image from "next/image";
import { FC } from "react";

type ImageGenerated = { image: string; prompt: string };

const ImageGenerated: FC<ImageGenerated> = ({ image, prompt }) => {
  return (
    <>
      {image ? (
        <Image
          className="rounded m-auto block"
          width={512}
          height={512}
          src={image}
          alt={prompt}
        />
      ) : (
        <div className="bg-gradient-to-tr m-auto block from-indigo-600 via-fuchsia-700 to-pink-300 w-auto rounded RegularImage animate-fade-down animate-once animate-duration-600 animate-delay-300"></div>
      )}
    </>
  );
};

export default ImageGenerated;
