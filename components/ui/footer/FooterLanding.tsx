import React from "react";
import Image from "next/image";
import Button from "../misc/Button";
import Link from "next/link";

const FooterLanding = () => {
  return (
    <div className="py-7 bg-[#232536] ">
      <div className="grid p-12 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex flex-col">
            <Link href="/">
              <Image
                width="0"
                height="0"
                sizes="150vw"
                className="h-16 w-auto"
                src="https://ik.imagekit.io/u33i3sss0/pps/LOGO_HF_02_gc1NBYlaw.png?updatedAt=1689016976789"
                alt="Logo Pool Paint Screen"
              />
            </Link>
            <div className="mt-7">
              <span className="text-2xl text-white">Customer Service: </span>{" "}
              <br />
              <span className="text-gray-100">
                {" "}
                Monday to Friday, 9 am to 5 pm. <br /> HQ Phone: (407) 554-9393
              </span>
            </div>
            <div className="mt-7">
              <span className="text-2xl text-white"> Offices: </span> <br />
              <span className="text-gray-100">
                {" "}
                37 N Orange Ave # 500, Orlando, <br />FL 32801 1330 Grand Blvd,
                Sarasota, FL 34232
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col">
            <div className="mt-7">
              <span className="text-2xl text-white"> Services: </span> <br />
              <div className="text-gray-100 flex flex-col">
                <Link href="/services/pool-cage-painting">Pool Cage Painting</Link>
                <Link href="/services/pool-cage-rescreening">Pool Cage Rescreening</Link>
              </div>
            </div>
            <div className="mt-7">
              <span className="text-2xl text-white"> Contact Us: </span> <br />
              <div className="text-gray-100 flex flex-col">
                <Link href="https://www.forms.poolpaintscreen.com"> Free Estimate</Link>
                <Link href="tel:4075549393">Call Us</Link>
                <Link href="https://www.forms.poolpaintscreen.com/contact-us-chat">Chat With Us</Link>
                <Link href="https://www.forms.poolpaintscreen.com/warranty-claim">Warranty Claim</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col">
            <div className="mt-7">
              <span className="text-2xl text-white"> Materials: </span> <br />
              <div className="text-gray-100 flex flex-col">
                <Link href="/materials/pool-cage-paints">Paints Screens</Link>
                <Link href="/materials/pool-cage-screens">Pool Cage Painting</Link>
              </div>
            </div>
            <div className="mt-7 ">
              <span className="text-2xl text-white">Terms: </span> <br />
              <div className="text-gray-100 flex flex-col">
                <Link href="/terms"> Terms and Conditions</Link>
                <Link href="/privacity">Cookies Policy</Link>
                {/* <Link href="$">Warranty of Service</Link>
                <Link href="$">Financing Program</Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="flex flex-col space-y-3">
            <h4 className="text-4xl text-white">Let's Get in Touch!</h4>
            <span className="text-gray-100 text-lg mb-2">
              You are one step closer to renew your pool cage enclosure. Contact
              Us or Call Us Today!
            </span>
            <div className="flex">
              <Link
                target="_blank"
                href="https://www.forms.poolpaintscreen.com"
                className="btn-main text-slate-800 font-bold"
              >
                Free Estimate
              </Link>
            </div>
          </div>

          <div className=" my-7 ">
            <Link href="https://www.bbb.org/us/fl/sarasota/profile/pool-enclosures/pool-paint-screen-llc-0653-90354834
">
              <Image
                width="0"
                height="0"
                sizes="150vw"
                className="h-14 w-auto"
                alt="Logo Pool Paint Screen"
                src={"/img/bbb_logo.png"}
              />
            </Link>
            <div className=" mt-7 flex space-x-7  ">
              <Link href="https://www.facebook.com/poolpaintscreen">
                <Image
                  width="0"
                  height="0"
                  sizes="150vw"
                  className="h-7 w-auto"
                  alt="Logo Pool Paint Screen"
                  src="https://ik.imagekit.io/u33i3sss0/pps/facebook-circle-logo-36_JCqxbN3NT.png?updatedAt=1689017585570"
                />
              </Link>
              <Link href="https://twitter.com/pps_pool?s=21">
                <Image
                  width="0"
                  height="0"
                  sizes="150vw"
                  className="h-7 w-auto"
                  alt="Logo Pool Paint Screen"
                  src="https://ik.imagekit.io/u33i3sss0/pps/twitter-logo-36_e82TroEUo.png?updatedAt=1689017650057"
                />
              </Link>
              <Link href="https://www.instagram.com/poolpaintscreenllc">
                <Image
                  width="0"
                  height="0"
                  sizes="150vw"
                  className="h-7 w-auto"
                  alt="Logo Pool Paint Screen"
                  src="https://ik.imagekit.io/u33i3sss0/pps/instagram-logo-36_t21zWKQX4.png?updatedAt=1689017650106"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@poolpaintscreenllc
"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="150vw"
                  className="h-7 w-auto"
                  alt="Logo Pool Paint Screen"
                  src="https://ik.imagekit.io/u33i3sss0/pps/youtube-logo-36__Z6Gfs2Dl.png?updatedAt=1689017650782"
                />
              </Link>
              <Link
                href="https://www.google.com/search?client=safari&hl=en-us&q=Pool+Paint+Screen+LLC&ludocid=5712230534025145435&gsas=1&client=safari&ibp=gwp;0,7&lsig=AB86z5U597_-fAFhAE-j6yic58WD&kgs=cd1d120b9a784182&shndl=-1&source=sh/x/kp/local/3#lpg=cid:CgIgAQ%3D%3D"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="150vw"
                  className="h-7 w-auto"
                  alt="Logo Pool Paint Screen"
                  src="https://ik.imagekit.io/u33i3sss0/pps/google-logo-36_S_9U--Yyp.png?updatedAt=1689017650071"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default FooterLanding;
