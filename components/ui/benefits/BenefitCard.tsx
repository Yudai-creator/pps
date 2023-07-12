import React from "react";
import Button from "../misc/Button";
import Image from "next/image";


const BenefitCard = (props: {
  title: string;
  resume: string;
  image: string;
  orientation?: string;
  index: number;
  logo: string;
  link?: string;
}) => {
  const { title, resume, image, orientation, index, link, logo } = props;

  


  // const serviceAlter = router.pathname === '/' ? 'service-detail-none' : 'service-detail';


  return (
    <div className="flex flex-col lg:flex-row relative">
      <Image
        width="0"
        height="0"
        sizes="100vw"
        src={image}
        className="h-full scale-150 z-10 mt-14 mb-20 w-auto lg:hidden object-cover"
        alt={title}
      />
      <div className="bg-primary"></div>
      <div
        className={`flex flex-col justify-center space-y-3 p-10 ${
          orientation === "right" ? "order-1" : "order-2"
        } lg:w-3/6 relative`}
      >
        <h2
          className={`h2  ${orientation === "right" ? "lg:pr-14" : "lg:pl-14"}`}
        >
          {title}{" "}
        </h2>
        <p
          className={`h3  ${orientation === "right" ? "lg:pr-14" : "lg:pl-14"} pb-10`}
        >
          {resume}
        </p>
        {link && <Button type={"secundary"} text="Read More" link="#" />}
      </div>
      {index > 0 && (
        <div
          className={`absolute z-50 top-0 lg:top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-tl-3xl ${
            index % 2 === 0 ? "bg-[#FFD050]" : "bg-gray-500"
          }  text-white font-bold text-6xl  flex items-center justify-center`}
        >
          {index}
        </div>
      )}
      <div
        className={`lg:w-3/6 relative ${
          orientation === "right" ? "order-2" : "order-1"
        }`}
      >
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src={image}
          className="h-full max-h-96 w-full  hidden lg:flex object-cover relative z-10"
          alt={title}
        />{" "}

        <Image
          width="70"
          height="70"
          className="absolute -right-5 top-28 hidden lg:inline-block z-30"
          src={logo}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default BenefitCard;
