import TestimonialCard from "@/components/ui/testimonials/TestimonialCard";
import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      author_name: "Walter Trujillo",
      author_slug: "5 star review",
      author_image:
        "https://ik.imagekit.io/u33i3sss0/pps/review_star_rSBEvImap.png?updatedAt=1689030314225",
      testimonial:
        "Pool Paint Screen completely transformed my Pool cage and screen. They are beyond professional and very hard working. My pool cage is over 20 years old and with paint and new screen it looks new and modern again in just 3 days.",
    },
    {
      id: 2,
      author_name: "David McLaughlin",
      author_slug: "5 star review",
      author_image:
      "https://ik.imagekit.io/u33i3sss0/pps/review_star_rSBEvImap.png?updatedAt=1689030314225",
      testimonial:
        "My experience with Pool Paint Screen was as they outlined and promised. Our pool cage and screen look brand new. Strongly recommend this company.",
    },
    {
      id: 2,
      author_name: "Thomas Popek",
      author_slug: "5 star review",
      author_image:
      "https://ik.imagekit.io/u33i3sss0/pps/review_star_rSBEvImap.png?updatedAt=1689030314225",
      testimonial:
        "The crew with Pool Paint Screen LLC arrived on time, they did a great job, and left the work site clean and orderly. Would definitely recommend to others. Thank you!",
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
