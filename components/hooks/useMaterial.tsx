import React, { useEffect, useState } from "react";
import { materials } from "../data/defaults";


interface Material {
    slug: string;
    title: string;
    logo: string;
    link: string;
    headerSection: {
      title: string;
      image: string;
      content: string;
    };
    products: { title: string; resume: string, image: string }[];
    features: { title: string; resume: string }[];
    featuresTitle: string;
    featuresFooter: string;
    featerTitleTop: string;
  }

const useMaterial = ({ slug }: { slug: string }) => {
    const [material, setMaterial] = useState<Material>(materials[0]);

    useEffect(() => {
      const page = materials.find((material: Material) => material.slug === slug);
  
      if (page) {
        setMaterial(page);
      }
    }, [slug]);
  
    return material;
}

export default useMaterial