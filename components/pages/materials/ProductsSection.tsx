"use client"
import useMaterial from "@/components/hooks/useMaterial";
import ProductCard from "@/components/ui/materials/ProductCard";
import React from "react";

const ProductsSection = ({ slug }: { slug: string }) => {
  const material = useMaterial({slug});
   

  return (
    <div>
      {Array.isArray(material?.products) &&
        material?.products.map((product: any, index: number) => (
          <ProductCard
            index={index +1 }
            orientation={product.orientation}
            image={product.image}
            resume={product.resume}
            title={product.title}
            key={`product-${index + 1}`}
          />
        ))}
    </div>
  );
};

export default ProductsSection;
