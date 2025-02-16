
import Banner from "./sections/Banner";
import CTA from "./sections/CTA";
import Introduction from "./sections/Introduction";
import WhyBuildSection from "./sections/WhyBuildSection";
import CTA2 from "./sections/CTA2";
import HowSection from "./sections/HowSection";
import ContactSection from "./sections/ContactSection";
import { initAnimations, initSmoothScroll } from "@/lib/animations";


export const metadata = {
  title: "Homepage"
}

export default function Home() {
  return (
    <>
      <Banner />
      <CTA />
      <Introduction />
      <WhyBuildSection />
      <CTA2 />
      <HowSection />
      <ContactSection />


    </>
  );
}
