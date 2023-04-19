import React from "react";
import Wrapper from "../../components/partials/Wrapper";
import BookBanner from "../../components/partials/BookBanner";
import HeroPages from "../../components/partials/HeroPages";
import TestimonialSection from "../../components/TestimonialSection";

const TestimonialPage = () => {
  return (
    <div>
      <HeroPages pageName="Testimonials" />

      <TestimonialSection />

      <BookBanner />
    </div>
  );
};

export default TestimonialPage;
