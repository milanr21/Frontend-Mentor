import React from "react";
import Image from "next/image";
import cardImg from "@/assets/images/illustration-article.svg";
import imageAvatar from "@/assets/images/image-avatar.webp";

const Card = () => {
  return (
    <div className="bg-yellow-400">
      <div className="flex items-center group justify-center max-w-sm mx-auto min-h-screen">
        <div className="  rounded-xl p-4 bg-white gap-4 flex items-left justify-center flex-col border-black border-r-8 border-b-8  group-hover:border-r-[12px] group-hover:border-b-[12px] border-2">
          <Image
            src={cardImg}
            alt="card"
            className="rounded-xl"
            width={500}
            height={500}
          />

          <div>
            <p className="text-black font-semibold rounded-md bg-yellow-400 w-fit px-2 py-1 mb-2 md:text-md text-sm tracking-wider">
              Learning
            </p>

            <p className="text-sm md:text-md">Published 21 Dec 2023</p>
          </div>

          <div className="space-y-3">
            <h1 className="md:text-2xl text-lg font-bold cursor-pointer group-hover:text-yellow-500 transition-all duration-300 ease-in-out">
              HTML & CSS foundations
            </h1>

            <p className="text-gray-600 md:text-md">
              These languages are the backbone of every website, defining
              structure, content and presentation
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <Image src={imageAvatar} alt="avatar" width={40} height={40} />
            <span className="font-bold text-md flex items-center justify-center">
              Greg Hooper
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
