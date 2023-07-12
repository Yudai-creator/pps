import React from "react";
import Button from "../misc/Button";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = (props: {
  title: string;
  resume: string;
  imageSrc: string;
  orientation?: string;
  linkWeb: string;
}) => {
  const { title, resume, imageSrc, linkWeb, orientation = "right" } = props;

  return (
    <div className="flex flex-col lg:flex-row z-10" style={{  alignItems: "center" }}>
      <div className={` ${orientation === "left"  ? 'lg:w-1/3 order-1' : 'lg:w-1/3 order-1 lg:order-2' } `}>
        <Image
          className="object-cover my-7 scale-[125%]  h-full w-full"
          src={imageSrc}
          width={800}
          height={800}
          alt={title}
        />
      </div>
      <div className={` ${orientation === "left"  ? 'lg:w-2/3 order-2  lg:pl-14' : 'lg:w-2/3 order-1 pr-7 lg:pr-14 ' }    flex flex-col space-y-5 `}  >
        <h3 className="h2  pt-10 lg:pt-0 ">{title}</h3>
        <p className="color-main-black-500  h4">{resume}</p>
        <div className="flex self-end lg:self-start pt-5">
          <Link
            href={linkWeb}
            className="border-slate-800 border-2 px-8 py-2 text-slate-800 font-bold"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
