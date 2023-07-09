"use client";
import useService from "@/components/hooks/useService";
import StepCard from "@/components/ui/services/StepCard";
import React from "react";

const StepsSections = ({ slug }: { slug: string }) => {
  const service = useService({ slug });

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

      {Array.isArray(service?.steps) &&
        service?.steps.map((step: any, index: number) => (
          <StepCard
            key={"page-" + index}
            number={step.number}
            resume={step.resume}
          />
        ))}
      </div>
    </div>
  );
};

export default StepsSections;
