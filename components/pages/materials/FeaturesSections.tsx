"use client"

import useMaterial from "@/components/hooks/useMaterial";
import FeatureProductCard from "@/components/ui/materials/FeatureProductCard";

const FeaturesSections = ({ slug }: { slug: string }) => {
    const material = useMaterial({slug});
    return (
        <div>
            <h3 className="h3 text-center py-7">{material.featuresTitle}</h3>
          {Array.isArray(material?.products) &&
            material?.features.map((feature: any, index: number) => (
              <FeatureProductCard
                resume={feature.resume}
                title={feature.title}
                key={`product-${index + 1}`}
              />
            ))}

<h3 className="h3   prose   uppercase my-7 px-32 -mx-32 lg:px-52 py-7 bg-[#FBF6EA]">{material.featuresFooter}</h3>
        </div>
      );
}

export default FeaturesSections