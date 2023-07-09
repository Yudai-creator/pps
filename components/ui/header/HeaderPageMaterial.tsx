"use client";
import React from "react";
import useMaterial from "@/components/hooks/useMaterial";

const HeaderPageMaterial = ({ slug }: { slug: string }) => {
  const service = useMaterial({ slug: slug });

  const renderTitle = () => {
    if (typeof service.title === "string") {
      return <h2 className="h2">{service.title}</h2>;
    }

    return null; // Manejar el caso en el que el título no sea ni una cadena ni un arreglo
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row space-y-7 lg:space-y-0 lg:space-x-14 h-48 items-center justify-start lg:justify-evenly">
        {renderTitle()}
      </div>
    </div>
  );
};

export default HeaderPageMaterial;
