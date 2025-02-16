'use client'

import CategoryCard from "@/components/categoryCard";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from 'react'
import CarouselNavigation from "@/components/CarouselNavigation";

const WhyBuildSection = () => {
    const categories = [
        {
          title: "SIMULATION",
          description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
          image: "/whybuild/item1.png"
        },
        {
          title: "EDUCATION",
          description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
          image: "/whybuild/item2.png"
        },
        {
          title: "SELF-CARE",
          description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
          image: "/whybuild/item3.png"
        },
        {
          title: "OUTDOOR",
          description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
          image: "/whybuild/item4.png"
        }
    ];

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
        <>
            <div className="inner-row mt-[60px] md:mt-[111px] text-center md:text-left">
                {/* Top */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-[15px] md:mb-[101px] mt-[60px] ">
                    {/* left */}
                    <div className="animate-on-scroll-right">
                        <h2 className="text-[26px] md:text-h2 font-bold tracking-[0px] mb-[5px] md:mb-0">WHY BUILD</h2>
                        <h2 className="text-[26px] md:text-h2 font-light tracking-[0px] -mt-[10px] mb-[15px] md:mb-0">WITH HYDRA?</h2>
                    </div>
                    {/* Right */}
                    <p className="text-left text-p max-w-[650px] animate-on-scroll-left ">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>

                {/* Bottom */}
                <div className="inner-row animate-on-scroll-up relative">
                    <div ref={sliderRef} className="keen-slider">
                        {categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                title={category.title}
                                description={category.description}
                                image={category.image}
                                className={`keen-slider__slide number-slide${index + 1}`}
                            />
                        ))}
                    </div>

                    {loaded && instanceRef.current && (
                        <CarouselNavigation 
                            onPrev={() => instanceRef.current?.prev()}
                            onNext={() => instanceRef.current?.next()}
                        />
                    )}
                    
                  
                </div>
            </div>
        </>
    )
}

export default WhyBuildSection