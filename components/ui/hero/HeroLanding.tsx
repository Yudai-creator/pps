import React from "react";
import Image from "next/image";
import Separator from "../misc/Separator";
import Link from "next/link";

const HeroLanding = () => {
  return (
    <>
      <div
        className="relative z-0"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image
          className="w-full h-[650px]   max-h-[650px] object-cover   lg:object-center  lg:h-auto"
          alt="Hero"
          width="0"
          height="0"
          sizes="100vw"
          style={{ zIndex: -1 }}
          src={
            "https://ik.imagekit.io/cluzstudio/pool/WhatsApp_Image_2021-01-28_at_8.29_1_SPXH8OW89.png?updatedAt=1684939909820"
          }
        />
        <div className="absolute mx-7 lg:mx-20 flex flex-col space-y-3">
          <span className="uppercase tracking-widest lg:font-medium leading-7 text-white text-xl lg:text-2xl">
            INTRODUCING
          </span>
          <h1 className="text-3xl lg:text-6xl font-bold text-white">
            Pool Paint Screen LLC
          </h1>
          <h2 className="uppercase font-medium pb-10 tracking-wider lg:font-normal leading-7 text-white text-xl lg:text-2xl">
            the leading expert in Pool Cage <br className="lg:flex hidden" />{" "}
            Painting and Rescreening
          </h2>
          <Link
            target="_blank"
            href="https://www.forms.poolpaintscreen.com"
          >
            {" "}
            <button className="btn-main ">Free Estimate</button>
          </Link>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default HeroLanding;
