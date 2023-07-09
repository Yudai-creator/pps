"use client";
import React from "react";
import useService from "@/components/hooks/useService";
import Link from "next/link";

const HeaderPageService = ({ slug }: { slug: string }) => {
  const service = useService({ slug: slug });

  const renderTitle = () => {
    if (typeof service.title === "string") {
      return <h2 className="h2">{service.title}</h2>;
    }

    return null; // Manejar el caso en el que el título no sea ni una cadena ni un arreglo
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row space-y-7 z-10 lg:space-y-0 lg:space-x-14 h-56 lg:h-48 items-center justify-start lg:justify-evenly">
        {renderTitle()}
        <Link
          href="https://www.forms.poolpaintscreen.com"
        >
          {" "}
          <button className="btn-main sm:self-start lg:self-center">
            Free Estimate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderPageService;
