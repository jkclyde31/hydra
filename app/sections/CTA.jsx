'use client';

import React,  { useState } from 'react';
import Image from "next/image";

const CTA = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: "/location.png",
      title: "Pay Us a Visit",
      content: "Union St, Seattle, WA 98101, United States",
    },
    {
      icon: "/phone.png",
      title: "Give Us a Call",
      content: "(110) 111-1010",
    },
    {
      icon: "/mail.png",
      title: "Send Us a Message",
      content: "Contact@HydraVTech.com",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className="inner-row mt-6 md:mt-24 mb-[60px] md:mb-[90px]">
        {/* Desktop View */}
        <div className="hidden md:block w-full bg-[#211E2E] rounded-[100px] py-14 px-10">
          <div className="flex items-center justify-between px-10 gap-8">
            {slides.map((slide, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-4 w-1/3">
                  <div className="w-[70px]">
                    <Image
                      src={slide.icon}
                      width={70}
                      height={70}
                      alt={slide.title + " icon"}
                    />
                  </div>
                  <div>
                    <h3 className=" text-white font-bold  text-h3 mb-0.5 tracking-normal ">
                      {slide.title}
                    </h3>
                    <p className="text-white/80 text-sm">{slide.content}</p>
                  </div>
                </div>
                {index < slides.length - 1 && (
                  <div className="w-px h-28 bg-gradient-to-b from-[#343045] to-[#C0B7E8]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile View with Slider */}
        <div className="block md:hidden w-full bg-[#211E2E] rounded-[100px] p-[25px] relative mb-[60px]">
          <div className="flex items-center justify-center  max-w-[75%] w-full mx-auto">
            <div className="">
              <Image
                src={slides[currentSlide].icon}
                width={50}
                height={50}
                alt={slides[currentSlide].title + " icon"}
              />
            </div>
            <div className="ml-4">
              <h3 className="hidden text-white font-bold text-2xl mb-0.5 tracking-normal">
                {slides[currentSlide].title}
              </h3>
              <p className="text-white/80 text-[14px]">
                {slides[currentSlide].content}
              </p>
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white w-8 h-8 flex items-center justify-center border border-white rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-8 h-8 flex items-center justify-center border border-white rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

         
        </div>
      </div>
    </div>
  );
};

export default CTA;