import Banner from "./sections/Banner";
import CTA from "./sections/CTA";
import Introduction from "./sections/Introduction";
import WhyBuildSection from "./sections/WhyBuildSection";

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

    </>
  );
}
