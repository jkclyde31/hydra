import Banner from "./sections/Banner";
import CTA from "./sections/CTA";

export const metadata = {
  title: "Homepage"
}

export default function Home() {
  return (
    <>
      <Banner />
      <CTA />
    </>
  );
}
