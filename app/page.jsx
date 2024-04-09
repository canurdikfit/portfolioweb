import About from "@/components/About";
import Accomplishmet from "@/components/Accomplishmet";
import Awards from "@/components/Awards";
import Career from "@/components/Career";
import Carousel from "@/components/Carousel";
import FooterFeedback from "@/components/FooterFeedback";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Carousel pageName={"Home"} />
      <About />
      <Accomplishmet />
      <Career />
      <Awards />
      <Testimonial />
      <FooterFeedback />
    </main>
  );
}

// className="container max-w-screen-xl"
