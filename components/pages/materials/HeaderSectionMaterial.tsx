"use client";
import useMaterial from "@/components/hooks/useMaterial";
import BenefitCard from "@/components/ui/benefits/BenefitCard";
import React from "react";

const HeaderSectionMaterial = ({ slug }: { slug: string }) => {
  const material = useMaterial({ slug });

  if (!material || !material.headerSection) {
    return null; // O puedes mostrar un mensaje de carga mientras se obtiene el servicio
  }

  return (
    <div>
      <BenefitCard
        title={material.headerSection.title}
        image={material.headerSection.image}
        logo={material.logo}
        resume={material.headerSection.content}
        index={0}
        orientation="left"
      />
    </div>
  );
};

export default HeaderSectionMaterial;
