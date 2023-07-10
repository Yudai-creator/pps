import Image from "next/image";
import React from "react";
import Link from "next/link";

const TestimonialCard = (props: {
  author_name: string;
  author_slug: string;
  author_image: string;
  testimonial: string;
}) => {
  const { author_name, author_slug, author_image, testimonial } = props;

  return (
    <div className="flex h-auto sm:w-1/3 w-full shadow-2xl my-4  flex-col">
      <div className="bg-yellow-300 items-center h-1 w-2/6"></div>
      <div className="h-32 bg-[#FBF6EA] flex space-x-3 px-7 items-center justify-start">
        <Image
         width={50}
         height={50}
          alt={author_name}
          src={author_image}
        />
        <div className="flex flex-col">
           <h4 className="
           h3">{author_name}</h4>
           <span className="text-gray-500 text-sm">{author_slug}</span>
        </div>
      </div>
      <div className="pb-7 flex flex-col">
         <p className="h3 p-4">
            {testimonial}
         </p>
         <Link
            href="https://www.google.com/search?hl=en-us&q=Pool+Paint+Screen+LLC"
            className="p-4 text-yellow-500 font-medium text-xl"
          >
            Posted on Google
          </Link>
      </div>
    </div>
  );
};

export default TestimonialCard;
