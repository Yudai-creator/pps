import BenefitCard from "@/components/ui/benefits/BenefitCard";
import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Improved Appearance",
      resume:
        "A pool cage that has been restored can look like new again adding to the overall aesthetic appeal of your backyard. A fresh coat of paint or new screening can enhance the look of your pool area and make it more inviting.",
      orientation: "right",
      imageUrl:
        "https://ik.imagekit.io/cluzstudio/Pool_Cage_Painting_edited__1__8NMz494XL.jpg?updatedAt=1685473132666",
    },
    {
      id: 2,
      title: "Increased Functionality",
      resume:
        "A restoration can also improve the functionality of your pool cage. Replacing damaged screens or repairing rusted areas can help keep bugs and debris out of your pool area, making it more enjoyable to use.",
      orientation: "left",
      imageUrl:
        "https://ik.imagekit.io/cluzstudio/IMG_2790_TgLkuH1XT.jpg?updatedAt=1685473132697",
    },
    {
      id: 3,
      title: "Extended Lifespan",
      resume:
        "Restoring your pool cage can help extend its lifespan, saving you money on costly replacements. By addressing any issues early on, you can prevent further damage from occurring and ensure that your pool cage remains in great condition for years to come.",
      orientation: "right",
      imageUrl:
        "https://ik.imagekit.io/cluzstudio/Pool_Cage_Screen_1__1__4ouC2-wOG.jpg?updatedAt=1685473132906",
    },
  ];

  return (
    <div>
      <div className="flex flex-col ">
        <h2 className="h2">Benefits Of A Pool Cage Restoration</h2>
        <p className="h3 mt-3">
          Are you considering a pool cage restoration but unsure of its
          benefits? Discover how a pool cage restoration can improve the
          appearance, functionality, and lifespan of your pool cage, making it
          more enjoyable to use for years to come.
        </p>
      </div>
      <div className="flex mb-5 space-y-32 lg:space-y-7  mt-32 lg:mt-14 flex-col">
        {benefits.map((feature: any, index: number) => (
          <BenefitCard
            index={index + 1}
            orientation={feature.orientation}
            image={feature.imageUrl}
            resume={feature.resume}
            title={feature.title}
            key={feature.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
