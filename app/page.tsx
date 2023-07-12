import ServicesSection from "@/components/pages/home/ServicesSection";
import HeroLanding from "@/components/ui/hero/HeroLanding";
import Separator from "@/components/ui/misc/Separator";
import Image from "next/image";
import FeaturesSection from "../components/pages/home/FeaturesSection";
import BenefitsSection from "@/components/pages/home/BenefitsSection";
import AboutSection from "@/components/pages/home/AboutSection";
import TestimonialSection from "@/components/pages/home/TestimonialSection";
import FooterLanding from "@/components/ui/footer/FooterLanding";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-slate-50 ">
        <HeroLanding />
        <div className="h-72 relative z-0 flex flex-col  bg-cover bg-center bg-[url('/img/services.png')]"></div>
        <div className="px-7 -mt-64 my-7 lg:px-48 z-10 bg-slate-50 ">
          <ServicesSection />
        </div>
        <br />
        <Separator />
        <div className="h-60 relative z-0 flex flex-col  bg-cover bg-center bg-[url('/img/SERVICES_BENEFITS.png')]"></div>
        <div className="px-7 relative -mt-48 my-7 lg:px-48 z-10 ">
          <FeaturesSection />
        </div>
        <br />
        <Separator />
        <div className="h-60 relative z-0 flex flex-col  bg-cover bg-center bg-[url('/img/SERVICES_BENEFITS.png')]"></div>
        <div className="relative -mt-48 z-10 ">
          <BenefitsSection />
        </div>
        <br />
        <Separator />
        <div className="h-60 relative z-0 flex flex-col  bg-cover bg-center bg-[url('/img/services.png')]"></div>
        <div className="px-7 relative -mt-48 my-7 lg:px-48 z-10 ">
          <AboutSection />
        </div>
        <Separator />
        <div className="px-7 py-7 lg:px-48 bg-[url('/img/reviews.png')]">
          <TestimonialSection />
        </div>
        <Separator />
      </div>
    </main>
  );
}
