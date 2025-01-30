import Image from "next/image";

const HowSection = () => {
    return (
      <>
        <div className="inner-row text-center md:text-left">
          {/* Top */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-[36px] md:mb-[101px]">
            {/* left */}
            <div>
              <h2 className="text-h3 md:text-h2 font-bold tracking-[0px] mb-[16px] md:mb-0">INTRODUCTION</h2>
              <h2 className="text-h3 md:text-h2 font-light tracking-[0px] -mt-[10px] ">TO HYDRA VR </h2>
            </div>
            {/* Right */}
            <p className="text-p max-w-[650px] hidden md:block">
              Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
              nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
              quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
              lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </p>
          </div>
  
          {/* Bottom - Steps Section */}
          <div className="relative flex flex-col md:flex-row items-center justify-between py-10 px-4">
            {/* Connecting Lines - Hidden on Mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5">
              <div className="relative w-full h-full">
                <svg className="w-full" height="4" viewBox="0 0 1000 4">
                  <path 
                    d="M0 2 C 250 2, 250 -10, 500 2 C 750 14, 750 -10, 1000 2" 
                    stroke="#423F52" 
                    fill="none" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
  
            {/* Step Items */}
            {[
              { number: "/numbers/num1.png", title: "3D Conception & Design"},
              { number: "/numbers/num2.png", title: "Interaction Design"  },
              { number: "/numbers/num3.png", title: "VR World User Testing"  },
              { number: "/numbers/num4.png", title: "Hydra VR Deploy" },
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center mb-8 md:mb-0 group">
                <div className="">
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
      </>
    );
  };
  
  export default HowSection;