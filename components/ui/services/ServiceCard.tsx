import React from "react";
import Button from "../misc/Button";
import Image from "next/image";

const ServiceCard = (props: {
  title: string;
  resume: string;
  imageSrc: string;
  orientation?: string;
}) => {
  const { title, resume, imageSrc, orientation = "right" } = props;

  return (
    <div className="flex flex-col lg:flex-row z-10" style={{  alignItems: "center" }}>
      <div className={` ${orientation === "left"  ? 'lg:w-1/3 order-1' : 'lg:w-1/3 order-1 lg:order-2' } `}>
        <Image
          className="object-cover my-7 scale-[112%]  h-full w-full"
          src={imageSrc}
          width={400}
          height={400}
          alt={title}
        />
      </div>
      <div className={` ${orientation === "left"  ? 'lg:w-2/3 order-2  lg:pl-14' : 'lg:w-2/3 order-1 pr-7 lg:pr-14 ' }    flex flex-col space-y-5 `}  >
        <h3 className="h2  pt-10 lg:pt-0 ">{title}</h3>
        <p className="color-main-black-500  h4">{resume}</p>
        <div className="flex self-end lg:self-start pt-5">
          <Button type={'secundary'} text="Read More" link="#" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;