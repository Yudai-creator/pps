import TestimonialSection from "@/components/pages/home/TestimonialSection";
import StepsSections from "@/components/pages/services/StepsSections";
import BenefitCard from "@/components/ui/benefits/BenefitCard";
import HeaderPageService from "@/components/ui/header/HeaderPageService";
import CTA1 from "@/components/ui/misc/CTA1";
import Separator from "@/components/ui/misc/Separator";
import InfoCard from "@/components/ui/services/InfoCard";
import HeaderSectin from "../../../components/pages/services/HeaderSectin";

export default function Page({ params }: { params: { service: string } }) {
  return (
    <div className="relative">
      <div className="h-72  flex flex-col z-0  bg-cover bg-center bg-[url('/img/services.png')]"></div>
      <div className="px-7 z-10 -mt-64   ">
        <HeaderPageService slug={params.service} />
        <div  className="my-24"/>
        <HeaderSectin slug={params.service} />
      </div>
      <Separator />
      <div className="px-7 my-7 lg:mb-32 lg:px-48">
        <div className="flex flex-col ">
          <h2 className="h2">Steps</h2>
          <p className="h3 mt-3">
            A pool enclosure painting and rescreening service will include the
            following steps:
          </p>
        </div>
      </div>
      <div className="px-7 my-7 mb-14 lg:px-48">
        <StepsSections slug={params.service} />
      </div>{" "}
      <Separator />
      <div className="px-7 my-7 mb-14 lg:px-48">
        <InfoCard
          title="Pool cage painting provides essential protection for the aluminum metals of a pool cage"
          resume="safeguarding them against the damaging effects of weather and other environmental factors. Over time, exposure to sunlight, rain, and humidity can cause aluminum to corrode and deteriorate, compromising the structural integrity of the pool cage. By applying a high-quality paint like Bond-Plex or DTM specifically formulated for outdoor use, you create a barrier that shields the aluminum from these elements."
          image="https://ik.imagekit.io/cluzstudio/Figure_20_Painting_the_cage_1_IWewzF9P6.jpg?updatedAt=1686230293355"
          content={`The paint acts as a protective shield, preventing UV rays from
          causing discoloration and fading while also minimizing the risk of
          rust and corrosion. This is particularly important in areas with
          high humidity or saltwater exposure, as these conditions can
          accelerate metal deterioration. Additionally, the paint creates a
          smooth and even surface that helps to repel dirt, debris, and
          moisture, reducing the likelihood of buildup or damage over time. By
          investing in pool cage painting, you're not only improving the
          appearance of your pool enclosure, but you're also ensuring the
          longevity and durability of the aluminum materials. The protective
          properties of the paint help to maintain the structural integrity of
          the pool cage, prolonging its lifespan and reducing the need for
          costly repairs or replacements. With regular maintenance and
          painting, you can enjoy a beautiful, well-protected pool cage that
          will withstand the test of time and continue to enhance your outdoor
          space for years to come.`}
        />
      </div>
      <Separator />
      <div className="px-7 my-7 mb-14 lg:px-48">
        <TestimonialSection />
      </div>
      <div className="px-7 my-7 mb-14 lg:px-48">
        <CTA1
          title="READY TO MAKE IT HAPPEN?"
          resume="All right! You are one step closer to renew your pool enclousure area."
          link1Text="Free Estimate"
          link1Link="https://www.forms.poolpaintscreen.com"
          link2Text="Call Us"
          link2Link="https://www.forms.poolpaintscreen.com/contact-us-chat
          "
        />
      </div>
    </div>
  );
}
