import Separator from "@/components/ui/misc/Separator";
import ServiceCard from "@/components/ui/services/ServiceCard";
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Pool Cage Painting and Rescreening",
      imageSrc:
        "/img/IMG_5082 1.png",
      resume:
        "Over time, the paint on your pool cage can fade or chip, making it more vulnerable to damage from sun, wind, and rain. Painting the pool cage is a process that will help.",
      orientation: "left",
      linkWeb: "/services/pool-cage-painting"
    },
    {
      id: 2,
      title: "Pool Cage Rescreening",
      imageSrc:
        "/img/IMG_0748 2.png",
      resume:
        "Rescreening the pool cage not only helps to keep the area clean but also helps to prevent insects and other pests from entering the pool. Although there are many types of mesh available.",
      orientation: "right",
      linkWeb: "/services/pool-cage-rescreening"
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
            linkWeb={service.linkWeb}
          />
        ))}
      </div>
     
    </>
  );
};

export default ServicesSection;
