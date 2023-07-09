import FeatureCard from "@/components/ui/features/FeatureCard";
import React from "react";

const FeaturesSection = () => {
   
    const features = [
    {
      id: 1,
     title: "Best Paint for Pool Cages",
     resume: "We use Bond-Plex or DTM paint form Sherwin Williams for a durable and long-lasting finish in all our pool cage painting projects. These paints offer exceptional durability and resistance to fading, peeling, and chalking.",
     orientation: 'right',   
     imageUrl: 'https://ik.imagekit.io/cluzstudio/Royler_91113_nDNVGOq2F?updatedAt=1685330859017',
    },
    {
      id: 2,
     title: "Best Screens for Pool Cages",
     resume: "We use Phifer, Adford, or Perfect Patio screens, the most popular choices on the market. Each of these brands offers high quality features that can enhance your pool area's comfort, privacy, and aesthetic appeal",
     orientation: 'left',   
     imageUrl: 'https://ik.imagekit.io/cluzstudio/Royler_91113_Ov6poQpKJ?updatedAt=1685330859822',
    },
    
    ];
    
  return (
    <>
      <div className="flex flex-col ">
        <h2 className="h2">High Quality Material</h2>
        <p className="h3 mt-3">
          At Pool Paint Screen LLC, we understand the value of investing in a
          beautifully restored pool cage that can be enjoyed by you and your
          family. That is why we use top-quality, American-Made Materials that
          can withstand Florida's environmental conditions and deliver
          long-lasting results in every pool cage restoration.
        </p>
      </div>
      <div className="flex mb-5 space-y-14 lg:space-y-1  mt-14 flex-col">
        {features.map((feature: any)=> <FeatureCard orientation={feature.orientation} image={feature.imageUrl} resume={feature.resume} title={feature.title} key={feature.id}/>)}
      </div>
    </>
  );
};

export default FeaturesSection;
