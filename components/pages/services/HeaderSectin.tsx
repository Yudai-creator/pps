"use client";
import useService from "@/components/hooks/useService";
import BenefitCard from "@/components/ui/benefits/BenefitCard";
import React from "react";

const HeaderSectin = ({ slug }: { slug: string }) => {
  const service = useService({ slug });

  if (!service || !service.headerSection) {
    return null; // O puedes mostrar un mensaje de carga mientras se obtiene el servicio
  }

  return (
    <div>
      <BenefitCard
        title={service.headerSection.title}
        image={service.headerSection.image}
        logo={service.logo}
        resume={service.headerSection.content}
        index={0}
        orientation="left"
      />
    </div>
  );
};

export default HeaderSectin;
