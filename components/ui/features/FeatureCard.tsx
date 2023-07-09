import React from "react";
import Button from "../misc/Button";
import Image from "next/image";

const FeatureCard = (props: {
  title: string;
  resume: string;
  image: string;
  orientation?: string;
}) => {
  const { title, resume, image, orientation } = props;

  return (
    <>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        src={image}
        className="h-full scale-150  mt-14  w-full lg:hidden   object-cover"
        alt={title}
      />
      <div className="flex lg:py-7 flex-col  lg:flex-row">
        <div
          className={`${
            orientation === "right" ? "order-1" : "order-2"
          }  lg:w-3/5  flex flex-col justify-center space-y-3 mt-7 lg:mt-0`}
        >
          <h3 className="h3 font-medium uppercase">What We Use</h3>
          <h2 className="h2">{title}</h2>
          <p className="h3">{resume}</p>
          <div className="pb-14 flex justify-end">
          <Button type={'secundary'}   text="Read More" link="#" />
          </div>
        </div>
        <div
          className={`${
            orientation === "right"
              ? " lg:order-2 lg:ml-7"
              : "order-1 mr-7"
          } hidden lg:flex  lg:w-2/5 `}
        >
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src={image}
            className="h-full w-auto   object-cover"
            alt={title}
          />
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
