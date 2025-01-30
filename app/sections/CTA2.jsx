'use client';

import Image from "next/image";

const CTA2 = () => {

  return (
    <div>
      <div className="inner-row mt-6 md:mt-[110px] mb-[60px] md:mb-[90px] text-center md:text-left">
        {/* Desktop View */}
        <div className=" w-full bg-[#211E2E] rounded-[50px] md:rounded-[200px] py-[45px] md:py-[108px] px-10  mt-[56px] md:mt-0">
          <div className="flex flex-col items-center justify-center  ">
            <h2 className="text-[16px] md:text-h2 font-bold tracking-0">TECHNOLOGIES & HARDWARE </h2>
            <h2 className="text-h3 md:text-h2 font-light tracking-0">USED BY HYDRA VR.</h2>

          </div>
        </div>

      
      </div>
    </div>
  );
};

export default CTA2;