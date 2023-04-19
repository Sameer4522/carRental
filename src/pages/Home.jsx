import React from "react";
import HeroBanner from "../../components/HeroBanner";
import BookingSection from "../../components/BookingSection";
import PlanTripSection from "../../components/PlanTripSection";
import PickSection from "../../components/PickSection";
import BannerSection from "../../components/BannerSection";
import ChooseSection from "../../components/ChooseSection";
import TestimonialSection from "../../components/TestimonialSection";
import DownloadSection from "../../components/DownloadSection";
import FaqSection from "../../components/FaqSection/FaqSection";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <BookingSection />
      <PlanTripSection />
      <PickSection />
      <BannerSection />
      <ChooseSection />
      <TestimonialSection />
      <FaqSection />
      <DownloadSection />
    </>
  );
};

export default Home;
