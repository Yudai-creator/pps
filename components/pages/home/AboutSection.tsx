import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="flex  flex-col">
      {" "}
      <div className="flex flex-col ">
        <h2 className="h2">About Us</h2>
        <p className="h3 mt-3">
          Established in 2018, Pool Paint Screen LLC is a trusted, family-owned
          and operated business dedicated to delivering outstanding pool cage
          restoration services. With convenient locations in Orlando and
          Sarasota, to provide comprehensive pool cage painting and rescreening
          services to homeowners throughout the region.
        </p>
      </div>
      <div className="flex flex-col relative lg:flex-row ">
        <div className=" lg:w-3/5 order-2 lg:order-1">
          <div
            className={` flex flex-col justify-center space-y-3`}
          >
          <div className="bg-[#FFD050] z-0 -ml-4 absolute top-1 right-0 lg:top-2 lg:left-0 h-14 w-14 rounded-full"></div>
            <h2 className="h2 z-10">We, at Pool Paint Screen LLC</h2>
            <p className="h3">
              place great emphasis on ensuring complete customer satisfaction.
              Our team works closely with clients throughout the project, to
              incorporate their unique preferences into the final result. We are
              confident in our ability to deliver unmatched quality, and our
              glowing testimonials speak volumes about our commitment to
              excellence.
            </p>
          </div>
        </div>
        <div className={`lg:ml-14 mt-7 order-1 lg:order-2  lg:w-1/5`}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src={
              "https://ik.imagekit.io/cluzstudio/Redmi43_xfH1k6EcB?updatedAt=1685313747542"
            }
            className="h-full lg:scale-100 scale-150 lg:mt-0 mt-14 mb-20 w-auto  object-cover"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
