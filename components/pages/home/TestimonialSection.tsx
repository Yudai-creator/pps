import TestimonialCard from "@/components/ui/testimonials/TestimonialCard";
import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      author_name: "Kristin Watson",
      author_slug: "Marketing Coordinator",
      author_image:
        "https://ik.imagekit.io/cluzstudio/pool/Ellipse_1__2__27NO9zPgK.png?updatedAt=1684939906824",
      testimonial:
        "We use Bond-Plex or DTM paint form Sherwin Williams for a durable and long-lasting finish in all our pool cage painting projects.",
    },
    {
      id: 2,
      author_name: "Kristin Watson",
      author_slug: "Marketing Coordinator",
      author_image:
        "https://ik.imagekit.io/cluzstudio/pool/Ellipse_1_NcRIqaisp.png?updatedAt=1684939906805",
      testimonial:
        "We use Bond-Plex or DTM paint form Sherwin Williams for a durable and long-lasting finish in all our pool cage painting projects.",
    },
    {
      id: 2,
      author_name: "Jane Cooper",
      author_slug: "President of Sales",
      author_image:
        "https://ik.imagekit.io/cluzstudio/pool/Ellipse_1__1__23dR1aPHv.png?updatedAt=1684939906776",
      testimonial:
        "I cannot say enough good things about this company. We bought our house last summer and have been doing extensive remodel work. This was the one company that showed up on time and completed the job on budget and as promised. Eric is very responsive to customer needs, and the quality of their work is outstanding.",
    },
  ];

  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center ">
        <h2 className="h2 text-center">What our custumer say about us?</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-9">
        <div className="col-span-1"></div>

        <div className="col-span-9">
          <div className=" flex w-full sm:flex-row flex-col  justify-evenly   mb-5  gap-4    mt-7 lg:mt-14  ">
            {testimonials.map((testimonial: any, index: number) => (
              <TestimonialCard
                author_name={testimonial.author_name}
                author_slug={testimonial.author_slug}
                author_image={testimonial.author_image}
                testimonial={testimonial.testimonial}
                key={testimonial.id}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
