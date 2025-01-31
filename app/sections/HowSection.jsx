'use client'

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const HowSection = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 4,
          spacing: 15,
        },
        breakpoints: {
          "(max-width: 767px)": {
            slides: {
              perView: 1,
              spacing: 1100,
            },
          },
        },
      });



    return (
      <>
        <div className="inner-row text-center md:text-left">
          {/* Top */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-[36px] md:mb-[101px] animate-on-scroll-right">
            {/* left */}
            <div>
              <h2 className="text-h3 md:text-h2 font-bold tracking-[0px] mb-[16px] md:mb-0">HOW WE BUILD</h2>
              <h2 className="text-h3 md:text-h2 font-light tracking-[0px] -mt-[10px] ">WITH HYDRA VR </h2>
            </div>
            {/* Right */}
            <p className="text-p max-w-[650px] hidden md:block   animate-on-scroll-left">
              Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
              nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
              quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
              lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </p>
          </div>
  
          {/* Bottom - Steps Section */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
          

            <div ref={sliderRef} className="keen-slider">

            {[
              { number: "/numbers/num1.png", title: "3D Conception & Design"},
              { number: "/numbers/num2.png", title: "Interaction Design"  },
              { number: "/numbers/num3.png", title: "VR World User Testing"  },
              { number: "/numbers/num4.png", title: "Hydra VR Deploy" },
            ].map((step, index) => (
              <div
              key={index}
              className={`relative flex flex-col items-center mb-8 md:mb-0 group keen-slider__slide number-slide${index + 1} animate-on-scroll-up`}
              data-delay={(index * 1).toString()} // Convert to seconds and ensure it's a string
            >                <div className="" >
                  <Image 
                    src={step.number}
                    alt={`Step ${index + 1}`}
                    width={159}
                    height={159}
                    className="relative z-10"
                  />
                </div>
                
                {/* Text Content */}
                <div className="text-center mt-4 flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C0B7E8] text-[67px]">→</span>
                    <p className="text-h3 font-bold tracking-0 max-w-[187px] text-left">{step.title}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default HowSection;