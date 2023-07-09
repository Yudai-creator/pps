import Image from "next/image";
import React from "react";

const InfoCard = ({ title, resume, image, content }: { title: string; resume: string, image: string, content: string }) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col ">
        <h2 className="h2">{title}</h2>
        <p className="h3 mt-3">{resume}</p>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-7">
        <div className="col-span-5 lg:col-span-3">
          <p className="text text-slate-900">
            {content}
          </p>
        </div>
        <div className="col-span-5  lg:col-span-2">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src={image}
            className="h-full w-auto hidden lg:flex object-cover"
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
