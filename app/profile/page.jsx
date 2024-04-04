import Awards from "@/components/Awards";
import CareerImg from "@/components/CareerImg";
import Carousel from "@/components/Carousel";
import DetailedProfile from "@/components/DetailedProfile";
import FooterFeedback from "@/components/FooterFeedback";
import Testimonial from "@/components/Testimonial";
import React from "react";

function Profile() {
  return (
    <main>
      <Carousel pageName={"Profile"} />
      <DetailedProfile />
      <CareerImg />
      <Awards />
      <Testimonial />
      <FooterFeedback />
    </main>
  );
}

export default Profile;
