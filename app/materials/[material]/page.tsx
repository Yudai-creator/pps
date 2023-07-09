import TestimonialSection from "@/components/pages/home/TestimonialSection";
import StepsSections from "@/components/pages/services/StepsSections";
import HeaderPage from "@/components/ui/header/HeaderPageService";
import CTA1 from "@/components/ui/misc/CTA1";
import Separator from "@/components/ui/misc/Separator";
import InfoCard from "@/components/ui/services/InfoCard";
import HeaderPageMaterial from "@/components/ui/header/HeaderPageMaterial";
import HeaderSectionMaterial from "@/components/pages/materials/HeaderSectionMaterial";
import ProductsSection from "@/components/pages/materials/ProductsSection";
import FeaturesSections from "../../../components/pages/materials/FeaturesSections";

export default function Page({ params }: { params: { material: string } }) {
  return (
    <div className="relative bg-slate-50">
      <div className="h-72  flex flex-col z-0  bg-cover bg-center bg-[url('/img/services.png')]"></div>
      <div className="px-7 z-10 -mt-64   ">
        <HeaderPageMaterial slug={params.material} />
        <div  className="my-24"/>
        <HeaderSectionMaterial slug={params.material} />
      </div>
      <Separator />
      <div className="px-7 my-7 lg:mb-32 lg:px-48">
        <div className="flex flex-col ">
          <h2 className="h2">Products</h2>
          <p className="h3 mt-3">Sherwin Williams paints we use.</p>
        </div>
      </div>
      <div className="px-7 my-7 mb-14 lg:px-48">
        <ProductsSection slug={params.material} />
      </div>
      <div className="px-7 my-7 mb-14 lg:px-48">
        <FeaturesSections slug={params.material} />
      </div>

      <div className="px-7 my-7 mb-14 lg:px-48">
        <CTA1
          title="READY TO MAKE IT HAPPEN?"
          resume="All right! You are one step closer to renew your pool enclousure area."
          link1Text="Free Estimate"
          link1Link="https://www.forms.poolpaintscreen.com"
          link2Text="Call Us"
          link2Link="https://www.forms.poolpaintscreen.com/contact-us-chat"
        />
      </div>
    </div>
  );
}
