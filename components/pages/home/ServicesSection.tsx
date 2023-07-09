import Separator from "@/components/ui/misc/Separator";
import ServiceCard from "@/components/ui/services/ServiceCard";
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Pool Cage Painting and Rescreening",
      imageSrc:
        "https://ik.imagekit.io/cluzstudio/pool/IMG_5082_1_oO69FOHdUP.jpg?updatedAt=1684939908344",
      resume:
        "Over time, the paint on your pool cage can fade or chip, making it more vulnerable to damage from sun, wind, and rain. Painting the pool cage is a process that will help.",
      orientation: "left",
    },
    {
      id: 2,
      title: "Pool Cage Rescreening",
      imageSrc:
        "https://ik.imagekit.io/cluzstudio/pool/IMG_0748_2_LN02IChM0_.png?updatedAt=1684939908477",
      resume:
        "Rescreening the pool cage not only helps to keep the area clean but also helps to prevent insects and other pests from entering the pool. Although there are many types of mesh available.",
      orientation: "right",
    },
  ];

  return (
    <>
      <div className="flex flex-col relative  ">
        <h2 className="h2">Services</h2>
        <p className="h3 mt-3">
          We specialize in offering high quality pool cage rescreening and
          painting solutions to instantly transform your pool cage into a
          stunning outdoor oasis. Our services provide numerous benefits that
          make Pool Paint Screen LLC the ultimate choice for those looking to
          revitalize their pool area.
        </p>
      </div>
      <div className="flex my-10 space-y-4 lg:my-5 flex-col">
        {services?.map((service: any) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            resume={service.resume}
            imageSrc={service.imageSrc}
            orientation={service.orientation}
          />
        ))}
      </div>
     
    </>
  );
};

export default ServicesSection;
