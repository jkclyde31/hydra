import Banner from "./sections/Banner";
import CTA from "./sections/CTA";
import Introduction from "./sections/Introduction";

export const metadata = {
  title: "Homepage"
}

export default function Home() {
  return (
    <>
      <Banner />
      <CTA />
      <Introduction />

    </>
  );
}
