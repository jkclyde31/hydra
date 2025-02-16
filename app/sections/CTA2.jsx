'use client';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import CarouselNavigation from "@/components/CarouselNavigation";
import { useState } from "react";

const CTA2 = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
 const [sliderRef, instanceRef] = useKeenSlider({
  loop: true,
  mode: "free-snap",
  initial: 0,
  slides: {
    perView: 4,
    spacing: 15,
  },
  breakpoints: {
    "(max-width: 767px)": {
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
  },
  slideChanged(slider) {
    setCurrentSlide(slider.track.details.rel)
  },
  created() {
    setLoaded(true)
  },
});

  return (
    <div>
      <div className="inner-row mt-6 md:mt-[110px] text-center md:text-left pb-[15px] md:pb-[132px] ">
        <div className=" w-full bg-[#211E2E] rounded-[50px] md:rounded-[200px] py-[45px] md:py-[108px] px-10  mt-[56px] md:mt-0 animate-on-scroll-up"
            style={{
              backgroundImage: "url('/cta2.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
        >
          <div className="flex flex-col items-center justify-center  ">
            <h2 className="text-[16px] md:text-h2 font-bold tracking-0">TECHNOLOGIES & HARDWARE </h2>
            <h2 className="text-h3 md:text-h2 font-light tracking-0">USED BY HYDRA VR.</h2>

          </div>
        </div>

        {/* Sponsors */}
      <div ref={sliderRef} className="keen-slider flex items-center animate-on-scroll-up">
        <div className="keen-slider__slide number-slide1 relative h-[172px] w-[172px]">
          <Image 
            src={"/sponsors/sponsor1.png"} 
            alt="sponsor1" 
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="keen-slider__slide number-slide2 relative h-[252px] w-[252px]">
          <Image 
            src={"/sponsors/sponsor2.png"} 
            alt="sponsor2" 
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>


        <div className="keen-slider__slide number-slide3 relative h-[252px] w-[252px]">
          <Image 
            src={"/sponsors/sponsor3.png"} 
            alt="sponsor3" 
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>


        <div className="keen-slider__slide number-slide4 relative h-[252px] w-[252px]">
          <Image 
            src={"/sponsors/sponsor4.png"} 
            alt="sponsor4" 
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        {loaded && instanceRef.current && (
                        <CarouselNavigation 
                            onPrev={() => instanceRef.current?.prev()}
                            onNext={() => instanceRef.current?.next()}
                        />
                    )}
      </div>

      </div>
    </div>
  );
};

export default CTA2;