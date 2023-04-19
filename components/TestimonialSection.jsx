import React from "react";
import Wrapper from "./partials/Wrapper";
import Barney from "../src/assets/barney.jpg";
import Ted from "../src/assets/Ted.jpg";
import TestimonialCard from "./partials/TestimonialCard";

const TestimonialSection = () => {
  return (
    <section id="testimonialSection" className="bg-[#f8f8f8] py-24">
      <Wrapper>
        <div className="flex flex-col">
          <div className="mx-auto max-w-[43.5rem] text-center">
            <h4 className="rubik text-2xl font-semibold">Reviewed by People</h4>

            <h2 className="poppins mb-3 text-[2.5rem] font-bold">
              Client's Testimonials
            </h2>

            <p className="rubik text-[#706f7b]">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>

          <div className="mt-10 flex w-full justify-center gap-10 md:p-8">
            <TestimonialCard
              testimonial={`"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "`}
              img={Barney}
              name="Swarley Stinson"
              location="New York"
            />
            <TestimonialCard
              testimonial={`"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"`}
              img={Ted}
              name="Ted Mosby"
              location="New Jersey"
              classes="hidden lg:block"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default TestimonialSection;
