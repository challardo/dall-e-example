import Image from "next/image";
import { FC } from "react";

const DalleExample = () => {
  return (
    <>
      <Image
        className="rounded m-auto block"
        width={512}
        height={512}
        src="https://cdn.openai.com/labs/images/A%20Shiba%20Inu%20dog%20wearing%20a%20beret%20and%20black%20turtleneck.webp?v=1"
        alt={"example prompt"}
      />
      <p className="text-lg font-normal text-center"> Cool image right?</p>
    </>
  );
};

export default DalleExample;
