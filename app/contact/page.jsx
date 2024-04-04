import Carousel from "@/components/Carousel";
import FooterFeedback from "@/components/FooterFeedback";
import React from "react";

function page() {
  return (
    <main>
      <Carousel pageName={'Contact'}/>
      <FooterFeedback />
    </main>
  );
}

export default page;
