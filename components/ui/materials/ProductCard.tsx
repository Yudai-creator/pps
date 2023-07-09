import Image from "next/image";
import React from "react";
import Button from "../misc/Button";

const ProductCard = (props: {
  title: string;
  resume: string;
  image: string;
  orientation?: string;
  index: number;
  link?: string;
}) => {
  const { title, resume, image, orientation, index, link } = props;

  return (
    <div className="flex my-7 flex-col lg:flex-row relative">
      <Image
        width="0"
        height="0"
        sizes="100vw"
        src={image}
        className="h-full w-auto lg:hidden object-cover"
        alt={title}
      />
      <div
        className={`flex flex-col justify-center space-y-3 ${
          orientation === "right" ? "order-1" : "order-2"
        } lg:w-3/6 relative`}
      >
        <h2 className="h2">{title}</h2>
        <p className="h3">{resume}</p>
      </div>

      <div
        className={`lg:w-3/6 ${
          orientation === "right" ? "order-2 pl-7" : "order-1 mr-7"
        }`}
      >
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src={image}
          className="h-64 w-auto hidden lg:flex object-cover"
          alt={title}
        />
      </div>
    </div>
  );
};

export default ProductCard;
